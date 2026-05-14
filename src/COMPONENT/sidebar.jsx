import React, { useState } from "react";
import {
  CircleStop,
  MessageCircleMore,
  UsersRound,
  Phone,
  Settings,
  SquarePen,
  SquarePlus,
  ChevronDown,
} from "lucide-react";
import ChatList from "./chatlist";
const bottomBarIcons = [
  {
    icon: MessageCircleMore,
    label: "Chats",
    active: true,
    hideOnSm: false,
  },
  { icon: CircleStop, label: "Status", active: false, hideOnSm: false },
  { icon: UsersRound, label: "Groups", active: false, hideOnSm: false },
  { icon: Phone, label: "Calls", active: false, hideOnSm: false },
  { icon: Settings, label: "Settings", active: false, hideOnSm: true },
];

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Chats");
  const [chatList, setChatList] = useState([
    { 
      id: 1,
      imageUrl: "",
      name: "John Doe",
      lastMessage: "xup bro!",
      lastMessageTime: 1713861600000,
      unreadCount: 2,
    },
    { 
      id:2,
      imageUrl: "",
      name: "Rose Philips",
      lastMessage: "Where did you drop the game pad?",
      lastMessageTime: 1713883200000,
      unreadCount: 0,
    },
    {
      id: 2,
      imageUrl: "",
      name: "Tina Joyce",
      lastMessage: "hi",
      lastMessageTime:  1713840000000,
      unreadCount: 1,
    },
  ]);

  return (
    <div className="sidebar relative w-full md:w-100 border-r-none flex md:border-r md:border-gray-300 h-screen md:h-screen">
      {/* Top Sidebar */}
      <div className="fixed border-t-gray-300 border-t-[0.5px] md:border-t-0 bottom-0 w-full md:bottom-none md:static bg-white/30 rounded-sm  md:bg-purple-950  md:w-20  md:flex md:flex-col items-center p-6 md:rounded-md">
        <div className="p-4 h-10 w-10 hidden rounded-lg bg-blue-500 md:flex shadow-md backdrop-blur-sm items-center justify-center text-white text-2xl font-bold">
          P
        </div>
        <div className="mt-0 md:mt-9 flex justify-between gap-4 px-2 space-x-7 md:space-x-0 md:px-0 md:flex-col md:gap-7">
          {bottomBarIcons.map((item, index) => (
            <div
              onClick={() => setSelectedItem(item.label)}
              className={`relative ${selectedItem === item.label ? "w-full h-full rounded-none bg-none md:w-14 md:h-14 md:rounded-xl md:bg-white/30 flex justify-center items-center" : ""} group flex flex-col items-center gap-1 cursor-pointer`}
              key={index}
            >
              <item.icon
                className={`${item.hideOnSm ? "hidden" : ""} ${item.label === "Chats" ? "fill-green-500 md:fill-none stroke-gray-100 md:stroke-gray-200" : ""} ${item.label === "Calls" ? "text-purple-950 fill-purple-950 md:text-gray-200" : ""} md:block  md:text-gray-200 hover:text-purple-300`}
              />
              <p className={`${item.hideOnSm ? "hidden" : ""} md:hidden`}>
                {item.label}
              </p>
              <span className="absolute flex items-center justify-center  left-full ml-2 top-1/2 -translate-y-1/2 opacity-0 font-sans h-8 w-14 group-hover:opacity-100 text-gray-200 transition text-sm bg-black rounded">
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <button className="hidden w-14 h-14 rounded-full md:flex items-center justify-center mt-auto ">
          <img className="w-full h-full" src="./ASSETS/man.png" alt="logo" />
        </button>
      </div>
      {/* Chat List */}
      <div className="flex-1 md:p-3 p-2 flex w-full flex-col">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-2xl hidden md:block font-bold">Chats</h2>
          <SquarePen className="stroke-blue-500 hidden cursor-pointer md:block" />
          <h2 className="block text-purple-950 text-3xl font-bold md:hidden">
            Pingora
          </h2>
          <div className="flex md:hidden items-center gap-4 p-2">
            <SquarePlus className="w-6 h-6" />
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <img
                className="w-full h-full"
                src="./ASSETS/man.png"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="search-bt flex py-1 md:py-2 justify-center items-center mb-4">
          <input
            className="text-base w-11/12 h-12 md:text-lg md:w-12/12 md:h-9 px-2 rounded-full font-medium border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search or start new chat..."
          />
        </div>
        <div className="flex justify-between md:justify-evenly gap-2 md:gap-0.5 md:px-2 items-center mb-2">
          <>
            {["All", "Unread", "Personal", "Groups", "Starred"].map(
              (filter, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm shadow-sm transition duration-300 hover:bg-purple-400 font-bold ${filter === "All" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} ${filter === "Groups" || filter === "Personal" ? "md:hidden" : ""}`}
                >
                  {filter}
                </button>
              ),
            )}
          </>
          <button className="relative group bg-gray-200 hidden md:flex justify-center items-center rounded-full h-7 w-9 ">
            <ChevronDown className="w-5 h-5 text-gray-500" />
            <span className="absolute flex text-sm items-center justify-center px-3 py-1 whitespace-nowrap font-sans top-10 opacity-0 group-hover:opacity-100 text-gray-100 bg-gray-950">
              More...
            </span>
          </button>
        </div>
        <ChatList chats={chatList} />
      </div>
    </div>
  );
};
export default Sidebar;
