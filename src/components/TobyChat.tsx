"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";

interface Message {
  content: string;
  isUser: boolean;
}

interface TobyChatProps {
  apiEndpoint?: string; // default endpoint
}

export default function TobyChat({ apiEndpoint = "https://mturko.pythonanywhere.com/chat" }: TobyChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  // Load previous messages from localStorage
  useEffect(() => {
    const chatHistory: Message[] = JSON.parse(localStorage.getItem("tobyChat") || "[]");
    setMessages(chatHistory);
  }, []);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const appendMessage = (content: string, isUser: boolean) => {
    const newMsg: Message = { content, isUser };
    setMessages(prev => {
      const updated = [...prev, newMsg];
      localStorage.setItem("tobyChat", JSON.stringify(updated));
      return updated;
    });
  };

  const sendMessage = async () => {
    const msg = input.trim();
    if (!msg) return;

    if (msg.length > 200) {
      appendMessage("🐾 Woof! That's too many words for this pup! (max 200 chars)", false);
      setInput("");
      return;
    }

    appendMessage(msg, true);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg }),
      });

      if (!response.ok) throw new Error("Server error");

      const data: { response: string } = await response.json();
      appendMessage(data.response, false);
    } catch (error: unknown) {
      const errorMsg = error instanceof Error ? error.message : "Error sending message";
      appendMessage(errorMsg, false);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent page scroll
      sendMessage();
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-background border rounded-lg shadow-lg">
      {/* Dog header / title */}
      <div className="flex items-center mb-2 space-x-2">
        <span className="text-2xl">🐕</span>
        <h2 className="text-xl font-luckiestguy text-text_hero_title">Chat with Toby</h2>
      </div>

      {/* Chat box */}
      <div
        ref={chatBoxRef}
        className="h-80 overflow-y-auto p-4 bg-white rounded-md shadow-inner mb-4 space-y-2"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg max-w-[80%] ${
              msg.isUser ? "bg-primary text-white self-end ml-auto" : "bg-gray-200 text-gray-800"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {loading && <div className="italic text-gray-400">Toby is thinking<span className="animate-pulse">...</span></div>}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Chat with Toby..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-buttons text-white rounded-lg font-fredoka hover:brightness-110 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}