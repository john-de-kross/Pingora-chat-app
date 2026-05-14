import {
  ArrowLeft,
  EllipsisVertical,
  Mic,
  Paperclip,
  Phone,
  Search,
  SearchCheckIcon,
  Send,
  SmilePlus,
  User,
  User2,
  Video,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export const ChatInterface = () => {
  const [isInput, setIsinput] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, [])
  const inputRef = useRef(null);
  const detectChatInput = (e) => {
    const value = e.target.value;
    setIsinput(value.length > 0 );
  };
  const changeOnInput = () => {
    const el = inputRef.current;
    const baseHeight  = isMobile ? 48 : 56
    el.style.height = `${baseHeight}px `;
    if (el.scrollHeight > baseHeight){
      el.style.height = `${el.scrollHeight}px`;
    }
  }
  return (
    <div className="flex w-full h-screen flex-col">
      <div className="flex justify-between items-center border-b px-3 md:px-4 h-16 md:h-20 border-gray-300 bg-white">
        <div className="flex items-center gap-4">
          <ArrowLeft className="text-gray-700 md:hidden" />
          <div className="flex gap-2 items-center">
            <div className="flex md:hidden justify-center items-center text-white w-7 h-7 bg-purple-950 rounded-full">
              P
            </div>
            <div className="md:flex hidden justify-center items-center text-white w-9 h-9 bg-purple-400 rounded-full">
              <User2 className="fill-purple-800 stroke-purple-800" />
            </div>
            <p className="text-base font-medium text-gray-900 md:text-lg">
              Mike
            </p>
          </div>
        </div>
        <div className="flex gap-5 md:gap-7 pr-6">
          <button className="hidden md:flex cursor-pointer">
            <Search className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button className="cursor-pointer ">
            <Phone className="text-gray-500 w-5 h-5 md:h-6 md:w-6" />
          </button>
          <button className="cursor-pointer">
            <Video className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button>
            <EllipsisVertical className="text-gray-500 w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
      <div
        className="relative inset-0 w-full h-screen"
        style={{
          backgroundImage: "url('./ASSETS/chatb.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* chat display here */}
        <div className="absolute left-0 top-0 h-full w-full inset-0 bg-black backdrop-blur-sm opacity-20"></div>
        <div className="chat"></div>
        <div
          className="fixed p-2 md:bottom-2 md:px-4 bottom-0 w-full"
          // style={{
          //   backgroundImage: "url('./ASSETS/chatb.jpg')",
          //   backgroundPosition: "center",
          //   backgroundSize: "cover",
          // }}
        >
          <textarea
            ref={inputRef}
            onChange={detectChatInput}
            onInput={changeOnInput}
            className="flex relative resize-none max-h-20 h-12 p-2 md:h-14 md:max-h-30 leading-relaxed overflow-hidden focus md:pt-4 px-14 md:px-20 pl-10 md:pl-16 md:text-base font-normal bg-gray-200 rounded-full w-10/12 md:w-7/12 focus:outline-none"
            placeholder="Message..."
          />
          <button className="emoji absolute bottom-6 left-4 md:left-7 cursor-pointer">
            <SmilePlus className="w-5 h-5 md:w-6 md:h-6 text-gray-500" />
          </button>
          <button className="absolute bottom-6 right-24 md:left-[54%] cursor-pointer">
            <Paperclip className="w-5 h-5 md:w-6 md:h-6 text-gray-500 -rotate-45" />
          </button>
          {isInput ? (
            <button className="absolute bottom-3 right-7 h-10 w-10 md:w-12 md:h-12 md:left-[59%] rounded-full md:top-4 flex justify-center items-center cursor-pointer bg-green-500 md:bg-blue-600">
              <Send className="w-5 h-5 md:h-6 md:w-6 stroke-black fill-black"/>
            </button>
          ) : (
            <button className="absolute bottom-3 right-7 h-10 w-10 md:w-12 md:h-12 md:left-[59%] rounded-full md:top-4 flex justify-center items-center cursor-pointer bg-green-500 md:bg-blue-600">
              <Mic className="w-5 h-5 stroke-black" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
