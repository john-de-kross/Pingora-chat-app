import { Eye, EyeOff, LockKeyhole, Mail, MessageCircle } from "lucide-react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPass, setShpwPass] = useState(false);

  const handlePassword = () => {
    setShpwPass(!showPass);
  };
  return (
    <div className="bg-[#020617] min-h-[100dvh] grid grid-cols-1 md:h-screen md:grid-cols-[70%_30%] w-full">
      <div className="absolute top-10 -left-30 h-40 w-40 md:hidden rounded-full bg-blue-900/55 blur-2xl" />

      <div className="w-full h-full hidden md:block">
        <img
          src="./ASSETS/login-bg.png"
          alt="login"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full min-h-[100dvh] flex gap-1 flex-col p-9 md:min-h-0 md:overflow-y-auto">
        <div className="flex flex-col md:flex-row  items-center gap-3">
          <div className="w-7 h-7 shadow-md text-lg flex justify-center items-center bg-blue-800 text-white font-bold shadow-blue-300 rounded-lg">
            <MessageCircle className="w-5 h-5 stroke-gray-900" />
          </div>
          <h2 className="text-gray-300 flex justify-center md:justify-start text-2xl font-bold">
            Pingora
          </h2>
        </div>

        <h1 className="text-gray-100 flex justify-center md:justify-start text-lg mt-7 font-medium py-">
          Welcome back 👋🏻
        </h1>
        <p className="text-xs font-medium flex justify-center md:justify-start text-gray-300">
          Sign in to continue your conversations
        </p>
        <form className="py-4 flex flex-col space-y-4" action="sumbit">
          <div className="relative flex flex-col gap-1">
            <label className="text-gray-100 text-base font-medium" htmlFor="">
              Email address
            </label>
            <input
              className="outline-none text-sm px-7 text-gray-50 placeholder:text-gray-500 font-medium autofill:shadow-[inset_0_0_0px_1000px_rgb(17,24,39)] bg-gray-900 rounded h-9"
              type="email"
              name="email"
              placeholder="you@example.com"
            />
            <Mail className="absolute ml-1 bottom-2 w-4 h-4 text-gray-500" />
          </div>

          <div className="relative flex flex-col gap-1">
            <label className="text-gray-100  text-base font-medium" htmlFor="">
              Password
            </label>
            <input
              className="relative outline-none text-sm px-7 text-gray-50 placeholder:text-gray-500 font-normal bg-gray-900 rounded h-9"
              type={showPass ? "text" : "password"}
              placeholder="Enter your password"
            />
            <LockKeyhole className="absolute bottom-2 w-4 h-4 ml-1 text-gray-500" />
            {showPass ? (
              <Eye
                onClick={handlePassword}
                className="absolute w-4 h-4 text-gray-500 top-10 right-4"
              />
            ) : (
              <EyeOff
                onClick={handlePassword}
                className="absolute w-4 h-4 text-gray-500 top-10 right-4"
              />
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <input checked type="checkbox" name="" id="" />
              <p className="text-gray-400 text-sm font-normal">Remember me</p>
            </div>
            <p className="text-sm cursor-pointer hover:text-gray-300 text-gray-400">
              Forgot password?
            </p>
          </div>
          <button className="text-gray-200 text-base h-10 transition-colors duration-300 hover:from-blue-500 hover:to-purple-500 font-medium bg-linear-to-t shadow from-blue-900 rounded to-gray-900">
            Sign in
          </button>

          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="text-sm text-gray-300">or continue with</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>
          <button className="h-10 flex gap-2 items-center justify-center transition-all duration-300 hover:bg-gray-600 bg-gray-800 text-gray-300 font-medium rounded">
            <img src="./ASSETS/google.png" alt="google" className="w-4 h-4" />
            Continue with Google
          </button>
          <button className="h-10 flex gap-2 items-center justify-center transition-all duration-300 hover:bg-gray-600  bg-gray-800 text-gray-300 font-medium rounded">
            <img src="./ASSETS/discord.png" alt="discord" className="w-4 h-4" />
            Continue with Discord
          </button>
          <p className="text-sm mx-auto text-gray-400">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
