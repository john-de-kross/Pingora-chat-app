import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Bell,
  ChevronDown,
  CircleStop,
  MessageCircleMore,
  Phone,
  Search,
  Settings,
  SquarePen,
  SquarePlus,
  UserPlus,
  UsersRound,
} from "lucide-react";
import ChatList from "./chatlist";

const bottomBarIcons = [
  { icon: MessageCircleMore, label: "Chats", active: true, hideOnSm: false },
  { icon: CircleStop, label: "Status", active: false, hideOnSm: false },
  { icon: UsersRound, label: "Groups", active: false, hideOnSm: false },
  { icon: UserPlus, label: "Connect", active: false, hideOnSm: false },
  { icon: Phone, label: "Calls", active: false, hideOnSm: false },
  { icon: Settings, label: "Settings", active: false, hideOnSm: true },
];

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Chats");
  const navigate = useNavigate();
  const [chatList] = useState([
    {
      id: 1,
      imageUrl: "",
      name: "John Doe",
      lastMessage: "xup bro!",
      lastMessageTime: 1713861600000,
      unreadCount: 2,
      online: true,
    },
    {
      id: 2,
      imageUrl: "",
      name: "Rose Philips",
      lastMessage: "Where did you drop the game pad?",
      lastMessageTime: 1713883200000,
      unreadCount: 0,
      online: false,
    },
    {
      id: 3,
      imageUrl: "",
      name: "Tina Joyce",
      lastMessage: "hi",
      lastMessageTime: 1713840000000,
      unreadCount: 1,
      online: true,
    },
  ]);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-100 text-slate-900 md:w-[380px] md:border-r md:border-slate-200 md:bg-white">
      <aside className="fixed bottom-0 left-0 z-10 flex w-full items-center justify-between border-t border-slate-200 bg-white/95 p-3 backdrop-blur-xl md:static md:w-24 md:flex-col md:justify-start md:border-r md:border-slate-200 md:border-t-0 md:bg-gradient-to-b md:from-violet-950 md:to-indigo-950 md:p-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-xl font-bold text-white shadow-lg shadow-indigo-500/30 md:mb-8">
          P
        </div>

        <div className="flex w-full items-center justify-around gap-2 md:mt-8 md:flex-col md:justify-start md:gap-4">
          {bottomBarIcons.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                setSelectedItem(item.label);
                if (item.label === "Connect") {
                  navigate("/connect");
                }
              }}
              className={`group relative flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-200 ${
                selectedItem === item.label
                  ? "bg-white/15 text-white shadow-inner ring-1 ring-white/20"
                  : "text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-lg bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100 md:block">
                {item.label}
              </span>
              <span className="md:hidden text-[10px] font-medium text-current">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="hidden h-12 w-12 overflow-hidden rounded-full border border-white/20 bg-white/10 shadow-lg md:flex md:items-center md:justify-center md:mt-auto"
          aria-label="Profile"
        >
          <img
            className="h-full w-full object-cover"
            src="./ASSETS/man.png"
            alt="profile"
          />
        </button>
      </aside>

      <main className="flex w-full flex-1 flex-col overflow-hidden md:p-4">
        <div className="rounded-none border-b border-slate-200 bg-white/80 px-4 pb-4 pt-5 backdrop-blur-xl md:rounded-[28px] md:border md:border-slate-200 md:px-5 md:pb-5 md:pt-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">
                Messages
              </p>
              <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
                Chats
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200"
              >
                <Bell className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => navigate("/connect")}
                className="hidden rounded-full bg-violet-600 p-2.5 text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-700 md:flex"
                aria-label="New chat"
              >
                <SquarePlus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 shadow-sm">
            <Search className="h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search or start new chat..."
              className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {["All", "Unread", "Personal", "Groups", "Starred"].map(
              (filter, index) => (
                <button
                  key={index}
                  className={`whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold transition ${
                    filter === "All"
                      ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  } ${filter === "Groups" || filter === "Personal" ? "md:hidden" : ""}`}
                >
                  {filter}
                </button>
              ),
            )}
            <button
              type="button"
              className="ml-auto hidden items-center gap-1 rounded-full bg-slate-100 px-2.5 py-2 text-xs font-semibold text-slate-600 md:flex"
            >
              More
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-hidden bg-slate-50 px-3 pb-20 pt-3 md:px-2 md:pb-4 md:pt-2">
          <ChatList chats={chatList} />
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
