import { NavLink } from "react-router-dom";
import { sideBarRoutes } from "../routes/routesConfig";
import { Search, SquarePen } from "lucide-react";
import SearchChat from "./Search";
import Profile from "./Profile";
import ChatHistory from "./ChatHistory";

export default function SideBar() {
  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 p-4 flex flex-col">
      {/* Brand */}
      <div className="flex items-center gap-2 mb-8">
        <span className="bg-black text-white px-2 py-1 rounded-md text-sm font-bold">
          AI
        </span>
        <h2 className="text-lg font-semibold text-gray-800">DevAssist</h2>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-10 mt-4">
        <NavLink
          to="/new-chat"
          className={({ isActive }) =>
            `flex items-center gap-2 mx-2 px-4 py-3 text-sm font-medium rounded-xl transition ${
              isActive
                ? "bg-gradient-to-r from-black to-gray-800 text-white"
                : "bg-gradient-to-r from-black to-gray-800 text-white hover:opacity-90"
            }`
          }
        >
          <SquarePen className="w-4 h-4" />
          <span>New Chat</span>
        </NavLink>

        {/* Search Box */}
        <div className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-full bg-white focus-within:ring-2 focus-within:ring-black">
          <SearchChat />
        </div>
      </div>

      {/* Chat histories*/}
      <div className="flex items-center gap-6">
        <ChatHistory />
      </div>

      {/* User Profile (BOTTOM) */}
      <div className="mt-auto flex items-center gap-3 p-3 rounded-xl hover:bg-gray-100 transition cursor-pointer">
        <Profile />
      </div>
    </aside>
  );
}
