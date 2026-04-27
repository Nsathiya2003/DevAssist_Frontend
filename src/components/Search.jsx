import { Search } from "lucide-react";

export default function SearchChat() {
  return (
    <>
      {/* Search Box */}
      <Search className="w-4 h-4 text-gray-500" />
      <input
        type="text"
        placeholder="Search chats..."
        className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
      />
    </>
  );
}
