import {
  Eye,
  EyeClosed,
  EyeOff,
  LockKeyhole,
  Mail,
  MessageCircle,
  User,
  User2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useUser } from "./user";
import { motion, AnimatePresence } from "framer-motion";
import PasswordStrengthIndicator from "./PasswordStrength";
import { check } from "prettier";

const CreatAccount = () => {
  const [isTrue, setIsTrue] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser } = useUser();
  const checks = {
    lowercase: /[a-z]/,
    uppercase: /[A-Z]/,
    number: /[0-9]/,
    special: /[^A-Za-z0-9]/,
  };

  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
  ];

  let score = 0;

  const getPasswordLevel = () => {
    if (!user.password) return 0;

    if (user.password.length >= 8) score++;
    if (checks.lowercase.test(user.password)) score++;
    if (checks.uppercase.test(user.password)) score++;
    if (checks.number.test(user.password)) score++;
    if (checks.special.test(user.password)) score++;

    return score;
  };

   const requirements = {
      passLength: user.password.length >= 8,
      passLowercase: checks.lowercase.test(user.password),
      passUppercase: checks.uppercase.test(user.password),
      passNumber: checks.number.test(user.password),
      passSpecial: checks.special.test(user.password),
    };

  const passwordLevel = getPasswordLevel();

  const getPasswordStrength = () => {
    if (score <= 1) return "Weak";
    if (score <= 2) return "Fair";
    if (score <= 4) return "Strong";
    return "Very strong";
  };

  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  if (passwordLevel >= 5 && isTrue) {
    setTimeout(() => {
      setIsTrue(false);
    }, 3000);
  }

  const handlePasswordStrengthSignal = (e) => {
    const updatedUser = { ...user, [e.target.name]: e.target.value };
    setUser(updatedUser);
    setIsTrue(updatedUser.password.length > 0);
  };

  return (
    <div className="relative md:static w-full h-screen flex justify-center md:items-center py-2 md:px-0 bg-[#020617]">
      <div className="static md:relative w-full md:w-8/12 h-full md:h-auto shadow bg-[#020617] md:bg-slate-900/20 md:rounded-lg md:p-2 flex flex-col md:flex-row overflow-hidden">
        <div className="absolute top-10 -left-38 w-48  h-28 md:-left-10 md:w-40 md:h-48  bg-blue-700/50 blur-2xl" />
        <div className="absolute hidden md:block -bottom-12 left-4/12 w-40 h-38 bg-blue-700/50 blur-2xl" />
        <div className="w-auto mb-4 md:mb-0 md:w-5/12 flex flex-col pr-5 md:justify-center items-center py-1 gap-1 md:py-0">
          <div className="w-7 h-7 md:w-10 md:h-10 shadow-md text-lg flex justify-center items-center bg-blue-800 text-white font-bold shadow-blue-300 rounded-lg">
            <MessageCircle className="w-5 h-5 md:w-7 md:h-7 stroke-gray-900" />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-white mt-2">
            Pingora
          </h1>
          <h4 className="text-blue-400 text-center mb-2 hidden md:block text-base font-medium">
            Conversations that connect.
          </h4>
          <p className="text-gray-400 text-center leading-relaxed hidden md:block text-sm font-medium">
            Create your account and start chatting
          </p>
          <p className="text-gray-400 text-center leading-relaxed hidden md:block text-sm font-medium">
            with friends, communities, and the world.
          </p>
        </div>
        <div className="relative bg-transparent w-full py-0 md: md:py-4 h-full md:w-7/12 md:h-auto md:shadow md:rounded-lg md:bg-gray-950">
          <h2 className="text-lg md:text-xl text-center font-medium md:font-bold text-gray-200 mb-1">
            Create your account
          </h2>
          <p className="text-center font-medium text-gray-400 text-sm">
            Start chatting with your friends instantly
          </p>
          <form
            className="flex space-y-1 px-7 md:px-12 p-4 md:py-0 flex-col gap-3 md:gap-2"
            action=""
          >
            <div className="username flex flex-col">
              <label
                className="text-base md:text-sm font-medium mb-0.5 text-gray-300"
                htmlFor=""
              >
                Username
              </label>
              <input
                name="username"
                className="relative w-full outline-none bg-gray-900 px-9 md:px-8 md:text-sm text-sm h-10 md:h-8 border text-gray-100 border-gray-900 rounded-lg"
                type="text"
                placeholder="Choose a username"
                onChange={handleOnChange}
                value={user.username}
              />
              <User className="absolute h-5 w-5 md:h-4 md:w-4 mt-9 md:mt-8 ml-2 text-gray-500" />
              <p className="errMessage text-sm font-normal md:font-medium text-red-500 px-2"></p>
            </div>
            <div className=" flex flex-col">
              <label
                className="text-base md:text-sm font-medium mb-0.5 text-gray-300"
                htmlFor=""
              >
                Email address
              </label>
              <input
                name="email"
                className="relative w-full outline-none bg-gray-900 px-9 pb-0.5 text-sm h-10 md:h-8 border md:px-8 text-gray-100 border-gray-900 rounded-lg"
                type="email"
                placeholder="you@example.com"
                value={user.email}
                onChange={handleOnChange}
              />
              <Mail className="absolute h-5 w-5 md:h-4 md:w-4 mt-10 md:mt-7.5 ml-2 text-gray-500" />
              <p className="errMessage text-sm font-normal md:font-medium text-red-500 px-2"></p>
            </div>
            <div className="password flex flex-col">
              <label
                className="text-base md:text-sm font-medium mb-0.5 text-gray-300"
                htmlFor=""
              >
                Password
              </label>
              <input
                className="relative w-full outline-none bg-gray-900 px-9 text-sm h-10 md:h-8 border md:px-8 text-gray-100 border-gray-900 rounded-lg"
                type={showPassword ? "text" : "password"}
                placeholder="Choose a password"
                name="password"
                onChange={(e) => {
                  handleOnChange(e);
                  handlePasswordStrengthSignal(e);
                }}
                value={user.password}
              />
              <LockKeyhole className="absolute h-5 w-5 md:h-4 md:w-4 mt-9 md:mt-8 ml-2 text-gray-500" />
              {showPassword ? (
                <Eye
                  className="absolute right-10 mt-9 md:w-5 md:h-5 md:right-14 md:mt-7 text-blue-600"
                  onClick={handlePasswordVisibility}
                />
              ) : (
                <EyeOff
                  className="absolute right-10 mt-9 md:right-14 md:mt-7 md:w-5 md:h-5 text-blue-600"
                  onClick={handlePasswordVisibility}
                />
              )}
              <AnimatePresence>
                {isTrue && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="md:flex mt-2 mb-2 hidden items-center">
                      <div className="flex w-full items-center justify-between gap-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                          <span
                            className={`flex-1 h-1 rounded-full ${passwordLevel >= 5 ? "bg-green-500" : index < passwordLevel ? colors[index] : "bg-slate-900 border border-slate-900"} `}
                            key={index}
                          />
                        ))}
                        <p className="text-sm hidden md:block text-gray-300">
                          {getPasswordStrength()}
                        </p>
                      </div>
                    </div>
                    <p className="md:flex hidden text-xs md:text-sm font-normal whitespace-nowrap text-orange-400 leading-tight">
                      Use at least 8 characters with a mix of letters, numbers &
                      symbols.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <PasswordStrengthIndicator isTrue={isTrue} requirements={requirements} />
            <div className=" flex flex-col">
              <label
                className="text-base md:text-sm font-medium mb-0.5 text-gray-300"
                htmlFor=""
              >
                Confirm password
              </label>
              <input
                name="confirmPassword"
                onChange={handleOnChange}
                className="relative w-full outline-none bg-gray-900 px-9 md:px-8 text-sm h-10 md:h-8 border text-gray-100 border-gray-900 rounded-lg"
                type="password"
                placeholder="Confirm your password"
              />
              <LockKeyhole className="absolute h-5 w-5 md:w-4 md:h-4 mt-10 md:mt-7 ml-2 text-gray-500" />
              <p className="errMessage text-sm font-normal md:font-medium text-red-500 px-2"></p>
            </div>
            <div className="flex items-center gap-2 ">
              <input type="checkbox" checked name="" />
              <p className="text-gray-300 text-sm font-medium">
                I agree to the{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
            <button>
              <p className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 w-full py-2 rounded-lg">
                Create Account
              </p>
            </button>
            <div className="flex gap-4 items-center">
              <div className="flex-1 bg-gray-600 h-px " />
              <span className="text-gray-300">or continue with</span>
              <div className="flex-1 bg-gray-600 h-px " />
            </div>
            <div className="flex md:flex-row gap-4 flex-col">
              <button className="flex-1 items-center h-14 gap-2 md:h-9 bg-gray-800 rounded flex justify-center transition-all duration-300 hover:bg-gray-600">
                <img
                  className="w-5 h-5"
                  src="./ASSETS/google.png"
                  alt="google"
                />
                <p className="text-gray-300 text-sm font-medium py-2">Google</p>
              </button>
              <button className="flex-1 items-center gap-2 h-14 md:h-9 bg-gray-800 rounded flex justify-center transition-all duration-300 hover:bg-gray-600">
                <img
                  className="w-5 h-5"
                  src="./ASSETS/discord.png"
                  alt="discord"
                />
                <p className="text-gray-300 text-sm font-medium py-2">
                  Discord
                </p>
              </button>
            </div>
            <p className="text-center text-gray-400 font-normal text-sm">
              Already have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatAccount;
