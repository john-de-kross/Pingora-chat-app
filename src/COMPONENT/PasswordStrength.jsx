import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useUser } from "./user";
import { CircleX, X } from "lucide-react";

const PasswordStrengthIndicator = ({ isTrue }) => {
  const { user } = useUser();
  return (
    <AnimatePresence>
      {isTrue && (
        <motion.div initial={{opacity: 0, height: 0}} animate={{opacity:1, height:"auto"}} exit={{opacity: 0, height: 0}} transition={{duration:0.5}} className="block md:hidden">
          <div className="w-full h-full bg-gray-800 shadow-lg rounded-lg p-2 text-sm text-gray-300">
            <p className="text-sm font-medium mb-2 ">
              Password must meet the following requirements:
            </p>
            <div className="flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                    <CircleX className="text-red-500 w-4 h-4"/>
                    <p className="font-normal text-sm leading-tight text-red-500 ">At least 8 characters</p>
                </div>
                <div className="flex gap-1 items-center">
                    <CircleX className="text-red-500 w-4 h-4"/>
                    <p className="font-normal text-sm text-red-500 ">At least one letter</p>
                </div>
                <div className="flex gap-1 items-center">
                    <CircleX className="text-red-500 w-4 h-4"/>
                    <p className="font-normal text-sm text-red-500 ">At least one uppercase letter</p>
                </div>
                <div className="flex gap-1 items-center">
                    <CircleX className="text-red-500 w-4 h-4"/>
                    <p className="font-normal text-sm text-red-500 ">At least one number</p>
                </div>
                <div className="flex gap-1 items-center">
                    <CircleX className="text-red-500 w-4 h-4"/>
                    <p className="font-normal text-sm text-red-500 ">At least one special character</p>
                </div>
                
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PasswordStrengthIndicator;
