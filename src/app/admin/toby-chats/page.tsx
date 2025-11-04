"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

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

  useEffect(() => {
    async function loadChats() {
      const { data, error } = await supabase
        .from("toby_chats")
        .select("*")
        .order("created_at", { ascending: false });
      console.log("Supabase error:", error);
      console.log("Supabase data:", data);
      if (!error && data) setChats(data);
    }
    loadChats();
  }, []);

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
