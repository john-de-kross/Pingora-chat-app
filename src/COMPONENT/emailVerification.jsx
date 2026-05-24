import React, { useEffect, useState } from "react";

import { REGEXP_ONLY_DIGITS } from "input-otp";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Check, Mail } from "lucide-react";

const EmailVerification = () => {
  const [sendReset, setCodeReset] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCodeReset((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [sendReset]);

  const handleResetTimer = () => {
    setCodeReset(60);
  };

  return (
    <div className="w-full min-h-screen flex bg-gray-50 py-4 justify-center md:items-center md:py-8 md:px-0 md:bg-[#020617]">
      <div className="relative flex flex-col gap-4 items-center md:py-4 w-full md:w-100 md:bg-slate-900 md:h-[300px]">
        <div className="relative h-14 w-14 flex justify-center items-center rounded-full bg-gray-300">
          <Mail className="h-7 w-7 stroke-blue-500" />
          <div className="absolute flex justify-center items-center h-6 w-6 -bottom-2 right-0 border-2 rounded-full bg-blue-500">
            <Check className="w-3 h-3 text-gray-100" />
          </div>
        </div>
        <h3 className="font-bold text-xl text-gray-950">Verify Your Email</h3>
        <p className="text-gray-500 text-sm">
          We've sent a 6-digit verification code to
        </p>
        <p className="text-gray-800 font-medium text-sm">
          johnchristian@gmail.com
        </p>
        <span className="h-px md:hidden bg-gray-300 w-1/2 mb-3 mt-6"></span>

        <div className="flex flex-col gap-1.5">
          <p className="w-full text-center text-sm text-gray-500 font-medium">
            Enter the code below
          </p>
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
            <InputOTPGroup className={"text-gray-900 md:text-gray-400"}>
              <InputOTPSlot  index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator className="text-gray-400" />
            <InputOTPGroup
              className={"text-gray-900 outline-blue-500 md:text-gray-400"}
            >
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <Button
          className={"w-1/2 h-10 bg-blue-500 text-white"}
          variant="outline"
          
        >
          Verify Code
        </Button>
        <p className="text-gray-500 text-sm font-normal">
          Didn't receive the code?{" "}
          {sendReset <= 0 ? (
            <span
              onClick={handleResetTimer}
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
