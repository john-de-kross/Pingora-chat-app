import { Ellipsis, EllipsisVertical, Phone, Search, Video } from "lucide-react";
import React from "react";


const WelcomeLayout = () => {
  return (
    <div className="flex md:flex flex-1 w-full h-screen flex-col">
      
      <div className="w-full flex justify-between bg-white h-20 border-b border-gray-300">
        <div className="flex flex-col justify-center h-full px-4">
            <h2 className="text-2xl font-bold text-purple-950">Pingora</h2>
            <p className="text-sm text-gray-500 font-normal">Welcome to Pingora 👋</p>
        </div>
        <div className="items-center hidden gap-7 pr-4">
            <button className="">
                <Search className="text-gray-400 w-6 h-6"/>
            </button>
            <button className="">
                <Phone className="text-gray-400 w-6 h-6"/>
            </button>
            <button className="">
                <Video className="text-gray-400 w-6 h-6"/>
            </button>
            <button className="">
                <EllipsisVertical className="text-gray-400 w-6 h-6"/>
            </button>
        </div>
        
      </div>
      <div
        className="flex-1"
        style={{
          backgroundImage: `url("./ASSETS/chat.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        <div className="w-full h-full flex flex-col gap-1 items-center justify-center p-4">
            <img className="w-60 h-60" src="./ASSETS/speech-bubble.png" alt="chat icon" />
          <p className="text-gray-500 font-medium text-xl">Welcome to Pingora 👋 </p>
          <p className="text-gray-500 font-semibold text-base">Start a conversation and stay connected</p>
        </div>
      </div>

    </div>
  );
};

export default WelcomeLayout;