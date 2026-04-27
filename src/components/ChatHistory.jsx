import { NavLink } from "react-router-dom";
import { MessageSquare } from "lucide-react";

export default function ChatHistory() {
  const chats = [
    { id: 1, title: "Fix React state issue" },
    { id: 2, title: "Build login page UI" },
    { id: 3, title: "Explain useEffect hook" },
    { id: 4, title: "API error handling" },
  ];

  return (
    <div className="mt-16 flex flex-col h-full">
      {/* Section Title */}
      <p className="text-xs font-semibold text-gray-400 px-3 mb-3 uppercase tracking-wide">
        Recent Chats
      </p>

      {/* Chat List */}
      <div className="flex flex-col gap-1 overflow-y-auto pr-1">
        {chats.map((chat) => (
          <NavLink
            key={chat.id}
            to={`/chat/${chat.id}`}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition group ${
                isActive
                  ? "bg-gray-200 text-gray-900 font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`
            }
          >
            {/* Icon */}
            <MessageSquare className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-gray-600" />

            {/* Title */}
            <span className="truncate">{chat.title}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
