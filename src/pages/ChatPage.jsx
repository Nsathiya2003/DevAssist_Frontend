import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { createChat, getChatMessages } from "../services/chat";

export default function ChatPage() {
  const { id } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef(null);

  const loadMessages = async () => {
    if (!id) return;
    try {
      const res = await getChatMessages(id);
      setMessages(res?.data || []);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Unable to load conversation. Please refresh.");
    }
  };

  useEffect(() => {
    loadMessages();
  }, [id]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage = {
      _id: Date.now(),
      message: trimmed,
      message_type: "USER_QUERY",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError("");

    try {
      const res = await createChat({ prompt: trimmed, chatId: id });
      const botMessage = {
        _id: Date.now() + 1,
        message: res?.data,
        message_type: "LLM_RESPONSE",
        type: res?.type,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setError("Could not send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  const renderMessage = (item) => {
    if (item.message_type === "USER_QUERY") {
      return (
        <p className="whitespace-pre-wrap text-sm leading-6">{item.message}</p>
      );
    }

    const { type, message } = item;

    switch (type) {
      case "general":
        return (
          <p className="whitespace-pre-wrap text-sm leading-6">
            {message?.answer || message}
          </p>
        );

      case "explain":
        return (
          <div className="space-y-3 text-sm leading-6">
            <h3 className="font-semibold text-slate-900">{message?.title}</h3>
            <ul className="list-disc pl-5 text-slate-700">
              {message?.points?.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        );

      case "summarize":
        return (
          <div className="space-y-3 text-sm leading-6 text-slate-700">
            <h3 className="font-semibold text-slate-900">Summary</h3>
            <ul className="list-disc pl-5">
              {message?.summary?.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>
        );

      case "compare":
        return (
          <div className="text-sm leading-6 text-slate-700">
            <h3 className="font-semibold text-slate-900">{message?.topic}</h3>
            <div className="mt-3 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-700">
                  <tr>
                    <th className="px-3 py-2">Feature</th>
                    <th className="px-3 py-2">Item 1</th>
                    <th className="px-3 py-2">Item 2</th>
                  </tr>
                </thead>
                <tbody>
                  {message?.differences?.map((d, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-3 py-2 align-top">{d.feature}</td>
                      <td className="px-3 py-2 align-top">{d.item1}</td>
                      <td className="px-3 py-2 align-top">{d.item2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return <p className="text-sm leading-6">Unsupported message type</p>;
    }
  };

  function TypingDots() {
    return (
      <div className="flex items-center gap-2 text-slate-500 text-sm">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-500 animate-bounce" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-500 animate-bounce delay-150" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-500 animate-bounce delay-300" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* <header className="border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Conversation</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900">Chat #{id}</h1>
          </div>
          <p className="text-sm text-slate-500">Write your question below and get a response instantly.</p>
        </div>
      </header> */}

      <main className="mx-auto flex max-w-6xl flex-1 flex-col px-4 py-6">
        <div className="flex-1 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <div className="h-full overflow-y-auto px-6 py-6 space-y-5">
            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            {messages.length === 0 ? (
              <div className="flex min-h-[280px] items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-50 text-slate-500">
                No messages yet. Start by asking a question in the box below.
              </div>
            ) : (
              messages.map((item) => {
                const isUser = item.message_type === "USER_QUERY";
                return (
                  <div
                    key={item._id}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[82%] rounded-[28px] border px-5 py-4 shadow-sm transition-all duration-200 ${
                        isUser
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-slate-100 text-slate-900 border-slate-200"
                      }`}
                    >
                      <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
                        <span
                          className={`inline-flex h-2.5 w-2.5 rounded-full ${isUser ? "bg-white" : "bg-slate-900"}`}
                        />
                        <span>{isUser ? "You" : "Assistant"}</span>
                        {!isUser && item.type ? (
                          <span>• {item.type}</span>
                        ) : null}
                      </div>
                      <div className="space-y-3">{renderMessage(item)}</div>
                    </div>
                  </div>
                );
              })
            )}

            {loading && (
              <div className="flex justify-start">
                <div className="max-w-[60%] rounded-[28px] border border-slate-200 bg-slate-100 px-5 py-4 shadow-sm">
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="sticky bottom-0 mt-5 rounded-[32px] border border-slate-200 bg-white px-5 py-5 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
            <label htmlFor="chat-input" className="sr-only">
              Type a message
            </label>
            <textarea
              id="chat-input"
              rows="2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here..."
              className="min-h-[72px] flex-1 resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={loading || !input.trim()}
              className="inline-flex h-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 px-6 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-400"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Use Enter to send, Shift+Enter for a new line.
          </p>
        </div>
      </main>
    </div>
  );
}
