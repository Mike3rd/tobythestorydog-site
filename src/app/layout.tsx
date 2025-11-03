import type { Metadata } from "next";
import "@/styles/globals.css";
import { fredoka, nunito, barriecito, rubik, luckiestguy } from "@/lib/fonts";
import ClientPostHogProvider from "@/components/ClientPostHogProvider"; // new file

export const metadata: Metadata = {
  title: "Toby the Story Dog – Pet Gifts, Fun PDFs & Adventures",
  description:
    "Meet Toby the Story Dog! Explore his stories, download fun bonuses, and find perfect gifts for pet lovers.",
  keywords: [
    "Toby the Story Dog",
    "pet gifts",
    "dog stories",
    "fun activities for kids",
    "downloadable PDFs",
    "pet adventures",
    "dog lover gifts",
    "read to your dog",
  ],
  openGraph: {
    title: "Toby the Story Dog – Pet Gifts, Fun PDFs & Adventures",
    description:
      "Meet Toby the Story Dog! Explore his stories, download fun bonuses, and find perfect gifts for pet lovers.",
    url: "https://www.tobythestorydog.com",
    siteName: "Toby the Story Dog",
    images: [
      {
        url: "https://www.tobythestorydog.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Toby the Story Dog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toby the Story Dog – Pet Gifts, Fun PDFs & Adventures",
    description:
      "Meet Toby the Story Dog! Explore his stories, download fun bonuses, and find perfect gifts for pet lovers.",
    images: ["https://www.tobythestorydog.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${nunito.variable} ${barriecito.variable} ${rubik.variable} ${luckiestguy.variable}`}
    >
      <body className="bg-cream text-gray-800 font-nunito">
        <ClientPostHogProvider />
        {children}
      </body>
    </html>
  );
}
