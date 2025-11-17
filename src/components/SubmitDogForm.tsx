"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import imageCompression from "browser-image-compression";

interface SubmitDogFormProps {
  onSuccess?: () => void;
}

export default function SubmitDogForm({ onSuccess }: SubmitDogFormProps) {
  const [email, setEmail] = useState("");
  const [dogName, setDogName] = useState("");
  const [breed, setBreed] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const originalFile = e.target.files?.[0];
    if (!originalFile) return;

    try {
      const compressedFile = await imageCompression(originalFile, {
        maxSizeMB: 2,
        useWebWorker: true,
      });
      setFile(compressedFile);
    } catch (err) {
      console.error("Image compression error:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setSuccess(false);

    try {
      const fileName = `${crypto.randomUUID()}-${file.name}`;

      // Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from("dog-photos")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } = {} } = supabase.storage
        .from("dog-photos")
        .getPublicUrl(fileName);

      if (!publicUrl) throw new Error("Failed to get public URL");

      // Insert record into database
      const { error: dbError } = await supabase.from("dog_readers").insert({
        email,
        dog_name: dogName,
        breed,
        message,
        photo_url: publicUrl,
      });

      if (dbError) throw dbError;

      // Reset form
      setEmail("");
      setDogName("");
      setBreed("");
      setMessage("");
      setFile(null);
      setSuccess(true);

      if (onSuccess) onSuccess();
    } catch (err) {
      console.error("Error submitting:", err);
      alert("There was an error submitting your dog. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Dog’s Name</label>
        <input
          type="text"
          required
          value={dogName}
          onChange={(e) => setDogName(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Breed (optional)</label>
        <input
          type="text"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Message (optional)</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message for Toby"
          className="w-full border rounded px-3 py-2 h-24"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Dog Photo</label>
        <input
          type="file"
          required
          accept="image/*"
          onChange={handleFileChange}
          className="w-full"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange text-white py-2 rounded-lg hover:bg-orange-600 shadow-md hover:brightness-110 transition"
      >
        {loading ? "Uploading..." : "Submit"}
      </button>

      {success && (
        <p className="text-green-600 font-medium text-center mt-2">
          🎉 Thanks! Your dog has been submitted.
        </p>
      )}
    </form>
  );
}
