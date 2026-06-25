import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { useUser } from "./user";
import { Check, CircleX, X } from "lucide-react";

const PasswordStrengthIndicator = ({ isTrue, requirements }) => {
  const { user } = useUser();
  return (
    <AnimatePresence>
      {isTrue && (
        <motion.div initial={{opacity: 0, height: 0}} animate={{opacity:1, height:"auto"}} exit={{opacity: 0, height: 0}}  className="block md:hidden">
          <div className="w-full h-full bg-gray-800 shadow-lg rounded-lg p-2 text-sm text-gray-300">
            <p className="text-sm font-medium mb-2 ">
              Password must meet the following requirements:
            </p>
            <div className="flex flex-col gap-2">
                <div  className="flex gap-1 items-center">
                    <motion.div animate={{
                      scale: requirements.passLength ? 1.1 : 1,
                      
        
                    }}>

                      {requirements.passLength ? (
                        <CircleX className="text-green-500 w-4 h-4" />
                      ) : (
                        <CircleX className="text-red-500 w-4 h-4"  />
                      )}
                      

                    </motion.div>
                    <motion.p 
                    animate={{
                      color: requirements.passLength ? "#22c55e" : "#ef4444",
                    }}
                    transition={{duration: 0.2}}
                     className="font-normal text-sm leading-tight " >At least 8 characters</motion.p>
                </div>
                <div className="flex gap-1 items-center">
                    <motion.div animate={{
                      scale: requirements.passLowercase? 1.1 : 1,
                      
        
                    }}>

                      {requirements.passLowercase ? (
                        <CircleX className="text-green-500 w-4 h-4" />
                      ) : (
                        <CircleX className="text-red-500 w-4 h-4"  />
                      )}
                      

                    </motion.div>
                    <motion.p 
                    animate={{
                      color: requirements.passLowercase ? "#22c55e" : "#ef4444",
                    }}
                    transition={{duration: 0.2}}
                     className="font-normal text-sm leading-tight " >At least one lowercase letter</motion.p>
                </div>
                <div className="flex gap-1 items-center">
                    <motion.div animate={{
                      scale: requirements.passUppercase ? 1.1 : 1,
                      
        
                    }}>

                      {requirements.passUppercase ? (
                        <CircleX className="text-green-500 w-4 h-4" />
                      ) : (
                        <CircleX className="text-red-500 w-4 h-4"  />
                      )}
                      

                    </motion.div>
                    <motion.p 
                    animate={{
                      color: requirements.passUppercase ? "#22c55e" : "#ef4444",
                    }}
                    transition={{duration: 0.2}}
                     className="font-normal text-sm leading-tight " >At least one uppercase letter</motion.p>
                </div>
                <div className="flex gap-1 items-center">
                    <motion.div animate={{
                      scale: requirements.passNumber ? 1.1 : 1,
                      
        
                    }}>

                      {requirements.passNumber ? (
                        <CircleX className="text-green-500 w-4 h-4" />
                      ) : (
                        <CircleX className="text-red-500 w-4 h-4"  />
                      )}
                      

                    </motion.div>
                    <motion.p 
                    animate={{
                      color: requirements.passNumber ? "#22c55e" : "#ef4444",
                    }}
                    transition={{duration: 0.2}}
                     className="font-normal text-sm leading-tight " >At least one digit</motion.p>
                </div>
                <div className="flex gap-1 items-center">
                    <motion.div animate={{
                      scale: requirements.passSpecial ? 1.1 : 1,
                      
        
                    }}>

                      {requirements.passSpecial ? (
                        <CircleX className="text-green-500 w-4 h-4" />
                      ) : (
                        <CircleX className="text-red-500 w-4 h-4"  />
                      )}
                      

                    </motion.div>
                    <motion.p 
                    animate={{
                      color: requirements.passSpecial ? "#22c55e" : "#ef4444",
                    }}
                    transition={{duration: 0.2}}
                     className="font-normal text-sm leading-tight " >At least one special character</motion.p>
                </div>
                
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PasswordStrengthIndicator;
