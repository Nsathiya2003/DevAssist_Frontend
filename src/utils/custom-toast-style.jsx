export const CustomToast = ({ type, message }) => {
  const isSuccess = type === "success";

  return (
    <div
      className={`flex items-start gap-3 px-4 py-3 rounded-xl shadow-md border w-[300px]
        ${isSuccess ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}
      `}
    >
      {/* Icon */}
      <div
        className={`mt-0.5 text-lg
          ${isSuccess ? "text-green-600" : "text-red-600"}
        `}
      >
        {isSuccess ? "✔️" : "❌"}
      </div>

      {/* Content */}
      <div className="flex-1">
        <p
          className={`text-sm font-medium
            ${isSuccess ? "text-green-700" : "text-red-700"}
          `}
        >
          {isSuccess ? "Success" : "Error"}
        </p>
        <p className="text-xs text-gray-600">{message}</p>
      </div>
    </div>
  );
};