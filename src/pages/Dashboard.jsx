import { Sparkles, ArrowUp } from "lucide-react";
import { useState } from "react";
import { showError } from "../utils/toast";
import { createChat } from "../services/chat";
import { useNavigate } from "react-router-dom";
import AuthModal from "../components/Login";

const PrimaryTitle = [
  "Explain React hooks",
  "Fix my JavaScript error",
  "Build a login page",
  "Optimize API performance",
];

export default function Dashboard() {
  const [chat, setChat] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setChat(e.target.value);
  };

  let token = localStorage.getItem("token");
  console.log("Token us", token);

  const handleSubmit = async () => {
    if (!token) {
      alert("Please login or register to continue");
      setOpen(true);
      return;
    }
    if (!chat.trim()) return;
    setLoading(true);

    try {
      const res = await createChat({ prompt: chat, chatId: null });
      navigate(`/chat/${res?.chatId}`);
    } catch (error) {
      showError(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleExampleClick = (value) => {
    setChat(value);
  };

  return (
    <main className="min-h-[calc(100vh-64px)] bg-slate-50 py-10">
      <section className="mx-auto w-full max-w-3xl rounded-[32px] border border-slate-200 bg-white px-6 py-10 shadow-sm shadow-slate-200/40">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900 text-white shadow">
            <Sparkles className="h-5 w-5" />
          </div>
          <h2 className="text-3xl font-semibold text-slate-900">
            How can I help you today?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500">
            Ask a question about development, debugging, or architecture and get
            a clean, professional answer.
          </p>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Type your request here..."
              value={chat}
              onChange={handleChange}
              onKeyDown={(e) =>
                e.key === "Enter" && !e.shiftKey && handleSubmit()
              }
              className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:ring-1 focus:ring-slate-200"
            />
            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading || !chat.trim()}
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-slate-900 px-5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {loading ? "Sending..." : <ArrowUp className="h-4 w-4" />}
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Press Enter to send, or click the button to start a new chat.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {PrimaryTitle.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleExampleClick(item)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              {item}
            </button>
          ))}
        </div>
      </section>
      <AuthModal open={open} onClose={() => setOpen(close)} />
    </main>
  );
}
