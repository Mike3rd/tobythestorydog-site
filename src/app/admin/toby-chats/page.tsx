"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { trackEvent } from "@/lib/track";

interface ChatRow {
  id: number;
  created_at: string;
  message: string;
  reply: string | null;
  user_agent: string | null;
  ip_address: string | null;
}

export default function TobyChatsAdmin() {
  const [chats, setChats] = useState<ChatRow[]>([]);
  const [passwordInput, setPasswordInput] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

  useEffect(() => {
    if (!authorized) return;

    async function loadChats() {
      const { data, error } = await supabase
        .from("toby_chats")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data) setChats(data);
    }

    loadChats();
  }, [authorized]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD) {
      setAuthorized(true);
    } else {
      alert("Incorrect password");
    }
  };

  // Example popular questions tracking
  useEffect(() => {
    if (!chats.length) return;

    const questions = chats.map((c) => c.message.toLowerCase());
    const counts: Record<string, number> = {};

    questions.forEach((q) => {
      const key = q.split(" ").slice(0, 5).join(" "); // first 5 words
      counts[key] = (counts[key] || 0) + 1;
    });

    Object.entries(counts).forEach(([question, count]) => {
      trackEvent("popular_question", { question, count });
    });
  }, [chats]);

  if (!authorized) {
    return (
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <form onSubmit={handlePasswordSubmit} className="space-y-2">
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            placeholder="Enter admin password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-buttons text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">🐶 Toby Chat Logs</h1>
      <table className="w-full text-left border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Time</th>
            <th className="p-2">Message</th>
            <th className="p-2">Reply</th>
          </tr>
        </thead>
        <tbody>
          {chats.map((chat) => (
            <tr key={chat.id} className="border-t">
              <td className="p-2 text-sm text-gray-500">
                {new Date(chat.created_at).toLocaleString()}
              </td>
              <td className="p-2">{chat.message}</td>
              <td className="p-2 text-gray-700">{chat.reply}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
