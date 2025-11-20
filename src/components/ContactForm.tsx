"use client";
import { trackEvent } from "@/lib/track";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactNewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [emailError, setEmailError] = useState("");

  // Simple email regex for validation
  const validateEmail = (value: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot check
    const hpField = (e.currentTarget as HTMLFormElement).hp_field?.value;
    if (hpField) return;

    if (!email) {
      setErrorMsg("Email is required");
      setStatus("error");

      // Track validation error
      trackEvent("contact_form_validation_error", {
        field: "email",
        error: "required",
      });

      return;
    }

    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address");
      setStatus("error");

      // Track validation error
      trackEvent("contact_form_validation_error", {
        field: "email",
        error: "invalid",
      });
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase.from("contacts").insert({
      name,
      email,
      message,
      newsletter_opt_in: subscribe,
      created_at: new Date(),
    });

    if (error) {
      setStatus("error");
      setErrorMsg(error.message);
      trackEvent("contact_form_submission_error", {
        error: error.message,
        newsletter_opt_in: subscribe,
      });
    } else {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setSubscribe(false);

      // ✅ Track successful submission
      trackEvent("contact_form_submitted", {
        newsletter_opt_in: subscribe,
        message_length: message.length,
        name_provided: !!name,
      });
    }
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (!value) {
      setEmailError("");
    } else if (!validateEmail(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <section id="contact" className="max-w-3xl text-center py-16 px-4 mx-auto">
      <h2 className="text-3xl font-fredoka text-text_hero_title mb-4">
        Contact & Newsletter Signup
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Have a question or want occasional updates? Fill out the form below and
        stay in touch with Toby!
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-left max-w-md mx-auto"
      >
        {/* Honeypot field */}
        <input
          type="text"
          name="hp_field"
          autoComplete="off"
          style={{ display: "none" }}
        />

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
          onChange={(e) => handleEmailChange(e.target.value)}
          required
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            emailError ? "border-red-500 ring-red-500" : "focus:ring-accent"
          }`}
        />
        {emailError && (
          <p className="text-red-600 text-sm mt-1">{emailError}</p>
        )}

        <textarea
          placeholder="Your question or message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
          rows={4}
        />

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={subscribe}
            onChange={(e) => setSubscribe(e.target.checked)}
            className="h-4 w-4 accent-accent"
          />
          <span className="text-gray-700">
            Subscribe to occasional Toby updates
          </span>
        </label>

        {/* Submit button with disabled & animation */}
        <button
          type="submit"
          disabled={status === "loading" || !!emailError}
          className={`px-8 py-3 rounded-full font-fredoka text-lg sm:text-xl block mx-auto transition-transform duration-300
            ${
              status === "loading" || !!emailError
                ? "bg-buttons/50 cursor-not-allowed scale-95"
                : "bg-buttons text-text_hero_subtitle shadow-md hover:scale-105 hover:brightness-110"
            }`}
        >
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>

        {status === "success" && (
          <p className="text-green-600 mt-2">
            Thank you! We received your message to Toby.
          </p>
        )}
        {status === "error" && !emailError && (
          <p className="text-red-600 mt-2">{errorMsg}</p>
        )}
      </form>
    </section>
  );
}
