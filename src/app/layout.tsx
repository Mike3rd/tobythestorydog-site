import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Toby the Story Dog – Official Website",
  description: "Meet Toby the Story Dog! Discover his adventures and download fun bonuses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-gray-800 font-nunito">{children}</body>
    </html>
  );
}
