import { Sparkles, ArrowUp } from "lucide-react";
import { useState } from "react";
import { showError } from "../utils/toast";
import { createChat } from "../services/chat";

const PrimaryTitle = [
  "Explain React hooks",
  "Fix my JavaScript error",
  "Build a login page",
  "Optimize API performance",
];

export default function Dashboard() {
  const [chat, setChat] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setChat(value);
  };

  const handleSubmit = async () => {
    try {
      let res = await createChat({
        prompt: chat,
      });
      console.log("response is", res);
    } catch (error) {
      showError(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <main className="h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50">
      <section className="w-full max-w-2xl px-4 text-center">
        {/* Heading */}
        <div className="mb-8">
          <div className="flex justify-center mb-3">
            <div className="p-3 bg-black text-white rounded-2xl shadow">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-gray-800">
            How can I help you today?
          </h2>

          <p className="text-gray-500 mt-2 text-sm">
            Ask anything about development, debugging, or concepts
          </p>
        </div>

        {/* Input Box */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-2 flex items-center ">
          <input
            type="text"
            placeholder="Ask anything..."
            className="flex-1 px-3 py-3 text-sm outline-none text-gray-700"
            onChange={(e) => handleChange(e)}
            value={chat}
            name="chat"
            id="chat"
          />

          <button
            className="flex items-center justify-center w-10 h-10 rounded-xl cursor-pointer bg-black text-white hover:bg-gray-800 transition"
            onClick={handleSubmit}
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Suggestions */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {PrimaryTitle.map((item) => (
            <button
              key={item}
              className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition"
            >
              {item}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
