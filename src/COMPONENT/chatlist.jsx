import { SquarePen } from "lucide-react";
import React, { useState } from "react";

const ChatList = ({ chats }) => {
  return (
    <div className="h-full">
      {chats.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center">
          <img
            className="w-44 h-44"
            src="./ASSETS/chat-icon.png"
            alt="no chats"
          />
          <h3 className="text-lg font-bold">No Conversation yet</h3>
          <p className="text-base font-sans">
            Your chat list is empty. Start a new
          </p>
          <p className="text-base font-sans">
            conversation to connect with people
          </p>
          <button className="py-3 bg-linear-to-r mt-4 from-blue-500 to-purple-950  whitespace-nowrap h-10 text-white px-2 flex justify-center items-center gap-2 rounded-2xl">
            <SquarePen className="w-4 h-4 md:w-6 md:h-6" />
            <p className=" font-sans text-sm md:font-medium md:text-base">
              Start a new chat
            </p>
          </button>
        </div>
      ) : (
        <div className="py-4 px-2 w-full h-full overflow-y-auto">
          {chats
            .sort((a, b) => a.lastMessageTime - b.lastMessageTime)
            .map((ChatItem) => (
              
              <div
                className=" grid grid-cols-[auto_1fr_auto] gap-2 hover:bg-purple-200 rounded-2xl cursor-pointer py-2 md:py-4"
                key={ChatItem.id}
              >
                <div className="profile-display w-12 h-12 md:w-9 md:h-9 rounded-full py">
                  <img
                    className="w-full h-full"
                    src={ChatItem.imageUrl || "./ASSETS/man.png"}
                    alt="profile picture"
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-medium">{ChatItem.name}</h3>
                  <p className="text-sm text-gray-700 font-normal">
                    {ChatItem.lastMessage.slice(0, 19) + (ChatItem.lastMessage.length > 30 ? "..." : "")}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs text-gray-500">
                    {new Date(ChatItem.lastMessageTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  {ChatItem.unreadCount > 0 && (
                    <div className="flex justify-center text-xs text-white font-light items-center w-5 h-5 rounded-full bg-linear-30 from-blue-800 to-purple-900">
                        {ChatItem.unreadCount}
                    </div>
                  )}

                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ChatList;
