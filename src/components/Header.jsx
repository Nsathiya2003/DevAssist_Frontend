import { CircleQuestionMark } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Left Section */}
      <div>
        <h1 className="text-xl font-semibold text-gray-800">AI</h1>
      </div>
      {/* Right Section */}
      <div className="flex items-center gap-3 pr-6">
        {/* Help Icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <CircleQuestionMark className="w-5 h-5 text-gray-600" />
        </button>

        {/* Login */}
        <a
          href="#"
          className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition"
        >
          Login
        </a>

        {/* Primary CTA */}
        <button className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-xl hover:bg-gray-800 transition shadow-sm cursor-pointer ">
          + Get Started
        </button>
      </div>
    </header>
  );
}
