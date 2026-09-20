"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Array<{ sender: "user" | "ai"; text: string }>>([
    { sender: "ai", text: "Hi! How can Elev8 AI assist your career growth today?" },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Elev8 AI can generate customized learning roadmaps, score your ATS resume, and run mock interview simulations! Sign up free to try all tools.",
        },
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-black text-white rounded-full shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20"
          aria-label="Toggle Elev8 AI Assistant Chat"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white border border-[#E6E6E6] rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-[#F4F2EE] px-4 py-3 border-b border-[#E6E6E6] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#84E6F6]"></div>
              <span className="font-bold text-sm text-black">Elev8 Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#605F5F] hover:text-black text-xs">
              Close
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-72 overflow-y-auto space-y-3 bg-white text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-xl px-3 py-2 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-black text-white rounded-br-none"
                      : "bg-[#F4F2EE] text-black border border-[#E6E6E6] rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-3 border-t border-[#E6E6E6] bg-[#F4F2EE] flex gap-2">
            <input
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow bg-white border border-[#E6E6E6] rounded-full px-3 py-1.5 text-xs text-black focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="bg-black text-white p-2 rounded-full hover:bg-black/90 shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
