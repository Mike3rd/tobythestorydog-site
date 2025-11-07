"use client";

import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { SlSpeech } from "react-icons/sl";
import { trackEvent } from "@/lib/track";
import { supabase } from "@/lib/supabase";

interface Message {
  content: string;
  isUser: boolean;
}

interface TobyChatProps {
  apiEndpoint?: string; // default endpoint
}

interface ChatMessage {
  text: string;
  sender: "user" | "toby";
  timestamp: number;
}

const cleanupOldChats = (): void => {
  const MAX_CHAT_HISTORY = 50;
  const MAX_STORAGE_AGE = 7 * 24 * 60 * 60 * 1000; // 1 week

  try {
    const storedChats = localStorage.getItem("tobyChat");
    if (storedChats) {
      const chats: ChatMessage[] = JSON.parse(storedChats);

      // 🆕 PRESERVE WELCOME MESSAGE - always keep the first message if it's from Toby
      let recentChats = chats;
      if (chats.length > 0 && chats[0].sender === "toby") {
        const welcomeMessage = chats[0];
        const otherChats = chats.slice(1);

        // Filter out other chats older than 1 week
        const now = Date.now();
        const recentOtherChats = otherChats.filter(
          (chat) => now - chat.timestamp < MAX_STORAGE_AGE
        );

        // If still too many, keep only the most recent
        if (recentOtherChats.length > MAX_CHAT_HISTORY - 1) {
          recentOtherChats.splice(
            0,
            recentOtherChats.length - (MAX_CHAT_HISTORY - 1)
          );
        }

        recentChats = [welcomeMessage, ...recentOtherChats];
      } else {
        // Normal cleanup for existing chats without welcome message
        const now = Date.now();
        recentChats = chats.filter(
          (chat) => now - chat.timestamp < MAX_STORAGE_AGE
        );

        if (recentChats.length > MAX_CHAT_HISTORY) {
          recentChats.splice(0, recentChats.length - MAX_CHAT_HISTORY);
        }
      }

      localStorage.setItem("tobyChat", JSON.stringify(recentChats));
    }
  } catch (error) {
    console.log("Error cleaning chat history:", error);
  }
};

export default function TobyChat({
  apiEndpoint = "https://mturko.pythonanywhere.com/chat",
}: TobyChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  // 🆕 ADD THIS USE EFFECT TO CALL THE CLEANUP FUNCTION
  useEffect(() => {
    // Clean up old chats on component mount and set up periodic cleaning
    cleanupOldChats();

    const interval = setInterval(cleanupOldChats, 60 * 60 * 1000); // Clean every hour

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Load previous messages from localStorage OR show welcome message
  useEffect(() => {
    const storedChats = localStorage.getItem("tobyChat");

    if (storedChats) {
      try {
        // Try to parse as ChatMessage[] first (new format with timestamps)
        const chatHistory: ChatMessage[] = JSON.parse(storedChats);
        // Convert to Message[] for component
        const formattedMessages: Message[] = chatHistory.map((chat) => ({
          content: chat.text,
          isUser: chat.sender === "user",
        }));
        setMessages(formattedMessages);
      } catch {
        // If parsing fails, try old Message[] format
        const chatHistory: Message[] = JSON.parse(storedChats);
        setMessages(chatHistory);

        // Convert old format to new format with timestamps
        const updatedChats: ChatMessage[] = chatHistory.map((msg) => ({
          text: msg.content,
          sender: msg.isUser ? "user" : "toby",
          timestamp: Date.now(), // Approximate timestamp for old messages
        }));
        localStorage.setItem("tobyChat", JSON.stringify(updatedChats));
      }
    } else {
      // Show welcome message if no chat history exists
      const welcomeMessage: Message = {
        content:
          "🐶 Woof! I'm Toby the Story Dog! I'm a brave Chihuahua with white, black, and brown markings. Ask me about my adventures, what I look like, or my favorite hoomans Elayne & Mike! What would you like to know?",
        isUser: false,
      };
      setMessages([welcomeMessage]);

      // Also save as ChatMessage with timestamp
      const welcomeChatMessage: ChatMessage = {
        text: welcomeMessage.content,
        sender: "toby",
        timestamp: Date.now(),
      };
      localStorage.setItem("tobyChat", JSON.stringify([welcomeChatMessage]));
    }
  }, []);

  // Auto-scroll to bottom when messages update
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const appendMessage = (content: string, isUser: boolean) => {
    const newMsg: Message = { content, isUser };
    setMessages((prev) => {
      const updated = [...prev, newMsg];

      // Also save as ChatMessage with timestamp
      const chatMessages: ChatMessage[] = updated.map((msg, index) => ({
        text: msg.content,
        sender: msg.isUser ? "user" : "toby",
        timestamp: Date.now() - (updated.length - index - 1) * 1000, // Stagger timestamps slightly
      }));

      localStorage.setItem("tobyChat", JSON.stringify(chatMessages));
      return updated;
    });
  };

  const sendMessage = async () => {
    const msg = input.trim();
    if (!msg) return;

    if (msg.length > 200) {
      appendMessage(
        "🐾 Woof! That's too many words for this pup! (max 200 chars)",
        false
      );
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

      // 👇 Save both question + answer to Supabase
      await supabase.from("toby_chats").insert([
        {
          message: msg,
          reply: data.response,
          user_agent:
            typeof navigator !== "undefined" ? navigator.userAgent : null,
        },
      ]);

      // 👇 Randomly track ~20% of chats in PostHog to avoid noise
      if (Math.random() < 0.2) {
        trackEvent("chat_message_sampled", {
          message_length: msg.length,
          location: "chat_box",
        });
      }
    } catch (error: unknown) {
      const errorMsg =
        error instanceof Error ? error.message : "Error sending message";
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
        <span className="text-2xl">
          <SlSpeech />
        </span>
        <h2 className="text-xl font-luckiestguy text-text_hero_title">
          Chat with Toby
        </h2>
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
              msg.isUser
                ? "bg-primary text-white self-end ml-auto"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {msg.content}
          </div>
        ))}
        {/* Input -paw animation
{loading && (
  <div className="flex items-center space-x-2 text-gray-500 italic">
    <div className="flex space-x-1">
      <span className="animate-bounce">🐾</span>
      <span className="animate-bounce" style={{ animationDelay: '200ms' }}>🐾</span>
      <span className="animate-bounce" style={{ animationDelay: '400ms' }}>🐾</span>
    </div>
    <span>Toby is paw-typing...</span>
  </div>
)}
   */}

        {loading && (
          <div className="flex items-center space-x-2 text-gray-500 italic">
            <div className="flex space-x-1">
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              ></div>
              <div
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              ></div>
            </div>
            <span>Toby is typing...</span>
            <span className="text-lg">🐾</span>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Chat with Toby..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
        />

        <button
          onClick={() => {
            // Only send if input not empty
            if (!input.trim()) return;

            // Fire your existing message logic
            sendMessage();
          }}
          className="px-4 py-2 bg-buttons text-white rounded-lg font-fredoka hover:brightness-110 transition"
        >
          Send
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-gray-500 text-sm mt-3">
        *Toby’s replies are powered by AI for entertainment and educational fun
        — not every answer is guaranteed to be factual.
      </p>
    </div>
  );
}
