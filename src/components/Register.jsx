import { X } from "lucide-react";

export default function Register({ open, onClose }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md hover:bg-gray-100 cursor-pointer"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 text-center mb-6">
          Sign up to DevAssist
        </h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg text-sm outline-none focus:ring-2 focus:ring-black"
        />

        {/* Sign In Button */}
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your name"
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email-id"
        />

        {/* Divider */}
        <div className="flex items-center gap-2 my-5">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Google Sign In */}
        <button className="w-full py-3 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition cursor-pointer flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.5 6.1 29 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10 0 19-7 19-20 0-1.3-.1-2.7-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.5 16 18.9 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C33.5 6.1 29 4 24 4 16.3 4 9.7 8.4 6.3 14.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.1 0 9.8-2 13.3-5.2l-6.1-5c-2 1.5-4.5 2.2-7.2 2.2-5.2 0-9.7-3.3-11.3-8l-6.5 5C9.6 39.5 16.2 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.5 5.4-6.5 6.8l6.1 5C39.5 36.5 43.6 29.5 43.6 20.5z"
            />
          </svg>
          Continue with Google
        </button>

        {/* Signup */}
        <p className="text-sm text-gray-500 text-center mt-6">
          Don’t have an account?{" "}
          <span className="text-black font-medium cursor-pointer hover:underline">
            Create account
          </span>
        </p>
      </div>
    </div>
  );
}
