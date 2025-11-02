"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

interface BonusDownloadProps {
  fileUrl: string; // e.g., "/extras/toby-coloring.pdf"
}

export default function BonusDownload({ fileUrl }: BonusDownloadProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // hidden field for spam
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Real-time email validation
  const isEmailValid = email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (honeypot) return;

    // Email validation
    if (!email || !isEmailValid) {
      setErrorMsg("Please enter a valid email.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase.from("contacts").insert({
      name,
      email,
      newsletter_opt_in: subscribe,
      download_file: fileUrl,
      created_at: new Date(),
    });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
    } else {
      setStatus("success");
      setName("");
      setEmail("");
      setSubscribe(false);
    }
  };

  return (
    <section className="max-w-3xl text-center py-16 px-4 mx-auto">
      <h2 className="text-3xl font-fredoka text-orange-600 mb-4">Bonus Download</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Get a fun coloring page featuring Toby! Enter your email below to download and stay updated with occasional Toby news.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-md mx-auto">
        <input
          type="text"
          placeholder="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent ${
            !isEmailValid && email ? "border-red-500" : ""
          }`}
        />
        {!isEmailValid && email && (
          <p className="text-red-600 text-sm">Please enter a valid email address</p>
        )}

        {/* Honeypot */}
        <input
          type="text"
          name="hp"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
            className="h-4 w-4 accent-accent"
          />
          <span className="text-gray-700">Subscribe to occasional Toby updates</span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading" || !isEmailValid}
          className={`px-8 py-3 rounded-full font-fredoka text-lg sm:text-xl block mx-auto transition-transform duration-300
            ${status === "loading" || !isEmailValid
              ? "bg-buttons/50 cursor-not-allowed scale-95"
              : "bg-buttons text-text_hero_subtitle shadow-md hover:scale-105 hover:brightness-110"
            }`}
        >
          {status === "loading" ? "Processing..." : "Submit"}
        </button>

        {/* Success message with download link */}
        {status === "success" && (
  <div className="mt-6 flex flex-col items-center justify-center bg-orange-50 border border-orange-200 rounded-lg p-6 shadow-md">
    <p className="text-green-700 font-semibold text-lg mb-3 text-center">
      Thank you! Your download is ready:
    </p>
    <a
      href={fileUrl}
      target="_blank"
      className="px-6 py-3 bg-buttons text-text_hero_subtitle rounded-full font-fredoka text-lg sm:text-xl shadow-md hover:scale-105 hover:brightness-110 transition-transform duration-300"
    >
      Download Coloring Page
    </a>
  </div>
)}
        {status === "error" && <p className="text-red-600 mt-2">{errorMsg}</p>}
      </form>
    </section>
  );
}
