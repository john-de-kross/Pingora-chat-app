import { SquarePen } from "lucide-react";
import React from "react";

const ChatList = ({ chats }) => {
  return (
    <div className="h-full">
      {chats.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center rounded-[28px] border border-dashed border-slate-200 bg-white p-8 text-center">
          <img
            className="w-44 h-44"
            src="./ASSETS/chat-icon.png"
            alt="no chats"
          />
          <h3 className="mt-4 text-lg font-bold text-slate-800">
            No conversation yet
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Your chat list is empty.
          </p>
          <p className="text-sm text-slate-500">
            Start a new conversation to connect with people.
          </p>
          <button className="mt-5 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20">
            <SquarePen className="h-4 w-4" />
            Start a new chat
          </button>
        </div>
      ) : (
        <div className="h-full w-full space-y-2 overflow-y-auto pr-1">
          {chats
            .sort((a, b) => a.lastMessageTime - b.lastMessageTime)
            .map((ChatItem) => (
              <div
                className="grid cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[22px] border border-transparent bg-white p-3 shadow-sm transition-all duration-200 hover:border-violet-200 hover:bg-violet-50/40 hover:shadow-md"
                key={ChatItem.id}
              >
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-bold text-white shadow-md">
                    {ChatItem.name
                      .split(" ")
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  {ChatItem.online && (
                    <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
                  )}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="truncate text-sm font-semibold text-slate-800">
                      {ChatItem.name}
                    </h3>
                  </div>
                  <p className="truncate text-xs text-slate-500">
                    {ChatItem.lastMessage.length > 26
                      ? `${ChatItem.lastMessage.slice(0, 26)}...`
                      : ChatItem.lastMessage}
                  </p>
                </div>

                <div className="flex flex-col items-end justify-center gap-1.5">
                  <span className="text-[10px] font-medium text-slate-400">
                    {new Date(ChatItem.lastMessageTime).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                  {ChatItem.unreadCount > 0 ? (
                    <div className="flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-1.5 text-[10px] font-semibold text-white">
                      {ChatItem.unreadCount}
                    </div>
                  ) : (
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
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
