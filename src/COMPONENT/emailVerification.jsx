import React, { useEffect, useState } from "react";
import { useUser } from "./user";
import { useNavigate } from "react-router-dom";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import AlertMessage from "./alert";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Check, Mail } from "lucide-react";
import axios from "axios";
import LoadingSpinner from "./loader";

const EmailVerification = () => {
  const [sendReset, setCodeReset] = useState(60);
  const [otp, setOtp] = useState("");
  const { user } = useUser();
  const [otpError, setOtpError] = useState("");
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCodeReset((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev <= 10 ? `0${prev - 1}` : prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [sendReset]);

  const handleResetTimer = () => {
    setCodeReset(60);
  };

  const handleVerifyCode = async () => {
    setLoading(true);
    const code = otp;
    try{
      const res = await axios.post("http://localhost:3000/api/auth/verify-otp", {
        email: user.email,
        code
      })
      if (res.status === 200) {
        navigate("/login");
      }
    }catch(error){
      setLoading(false);
      const errMessage = error.response?.data?.message || "An error occurred";
      console.log(errMessage);
      if (errMessage.includes("missing")){
        setOtpError("Please enter the verification code");
      }else if (errMessage.includes("Invalid")){
        setOtpError("Invalid verification code");
      }else if (errMessage.includes("expired")) {
        setOtpError("Verification code has expired");
      }else{
        setServerError("An error occurred. Please try again later.");
      }
    }
  }
  const resendCode = async () => {
    try{
      const emailRes = await axios.post(
          "http://localhost:3000/api/auth/send-otp",
          {
            email: user?.email
          }
        )
        console.log(emailRes.data);
    }catch(error) {
      const errMessage = error.response?.data?.message || "An error occurred";
      console.log(errMessage)
      if (error.response?.status === 500){
        setServerError("Server error. Please try again later.");
      }
    }
  }

  const handleOtpChange = (value) => {
    setOtp(value);
    if (value.length === 6) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    setOtpError(""); 

  };
  useEffect(() => {
    const handleEmailCode = async() => {
      try {
        const emailRes = await axios.post(
          "http://localhost:3000/api/auth/send-otp",
          {
            email: user?.email,
          },
        )
        console.log(emailRes.data);
      }catch(error){
        console.log(error)
        

      }
      
    }
    handleEmailCode();

  }, [user])

  useEffect(() => {
    if (!serverError) return;
    const timer = setTimeout(() => {
      setServerError("");
    }, 10000);
    return () => clearTimeout(timer);
  }, [serverError]);

  return (
    <div className="w-full min-h-screen flex bg-gray-50 py-4 justify-center md:items-center md:py-8 md:px-0 md:bg-[#020617]">
      <div className="relative flex flex-col gap-4 items-center md:py-4 w-full md:w-100 md:rounded-md md:shadow md:bg-slate-900/40 md:h-auto">
        <div className="relative h-14 w-14 flex justify-center items-center rounded-full bg-gray-300">
          <Mail className="h-7 w-7 stroke-blue-500" />
          <div className="absolute flex justify-center items-center h-6 w-6 -bottom-2 right-0 border-2 rounded-full bg-blue-500">
            <Check className="w-3 h-3 text-gray-100" />
          </div>
        </div>
        <h3 className="font-bold text-xl text-gray-950 md:text-gray-200">
          Verify Your Email
        </h3>
        <p className="text-gray-500 md:text-gray-100 text-sm">
          We've sent a 6-digit verification code to
        </p>
        <p className="text-gray-800 md:text-white font-medium text-sm">
          {user?.email}
        </p>
        <span className="h-px md:hidden bg-gray-300 w-1/2 mb-3 mt-6"></span>
        {serverError && <AlertMessage message={serverError} />}

        <div className="flex flex-col gap-1.5">
          <p className="w-full text-center text-sm text-gray-500 md:text-gray-400 font-medium">
            Enter the code below
          </p>
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} value={otp} onChange={handleOtpChange}>
            <InputOTPGroup className={"text-gray-900 md:text-gray-100"}>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator className="text-gray-400" />
            <InputOTPGroup
              className={"text-gray-900 outline-blue-500 md:text-gray-100"}
            >
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-red-500 text-sm text-center">{otpError}</p>
        </div>
        <div className="">
          <p className="mt-1 text-sm text-muted-foreground">
            Didn't receive the verification code? Check your spam
          </p>
        </div>
        <Button
          className={"w-1/2 h-10 bg-blue-500 text-white"}
          variant="outline"
          onClick={handleVerifyCode}
          disabled={disabled}
        >
          {loading ? (
            <LoadingSpinner />
          ): (
            <span className="text-sm font-medium">Verify</span>
          )}
        </Button>
        <p className="text-gray-500 md:text-gray-300 text-sm font-normal">
          Didn't receive the code?{" "}
          {sendReset <= 0 ? (
            <span
              onClick={() => {
                resendCode();
                handleResetTimer();
              }}
              className="text-sm font-medium transition-all duration-300 cursor-pointer hover:text-blue-700 text-blue-500"
            >
              Resend code
            </span>
          ) : (
            <span className="font-medium text-blue-500">{sendReset}</span>
          )}
        </p>
      </div>
    </div>
  );
};
export default EmailVerification;
