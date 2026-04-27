import { CircleQuestionMark, Plus } from "lucide-react";
import { useState } from "react";
import AuthModal from "./Login";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        {/* Left Section */}
        <div>
          <h1 className="text-xl font-semibold text-gray-800">AI</h1>
        </div>
        {/* Right Section */}
        <div className="flex items-center gap-3 pr-6">
          {/* Login */}
          <a
            onClick={() => setOpen(true)}
            className="px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 hover:border-gray-400 transition cursor-pointer"
          >
            Login
          </a>
          {/* Help Icon */}

          <div className="relative group w-fit">
            <button className="p-2 rounded-lg">
              <CircleQuestionMark className="w-5 h-5" />
            </button>

            {/* Tooltip */}
          </div>

          {/* Primary CTA */}
          {/* <button
            className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-xl hover:bg-gray-800 transition shadow-sm cursor-pointer flex items-center gap-2"
            onClick={() => setOpen(true)}
          >
            <Plus className="w-5 h-5" />
            Get Started
          </button> */}
        </div>
      </header>
      {open && <AuthModal open={open} onClose={() => setOpen(false)} />}
    </>
  );
}
