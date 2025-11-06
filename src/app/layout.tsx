import type { Metadata } from "next";
import Script from "next/script";
import "@/styles/globals.css";
import { fredoka, nunito, barriecito, rubik, luckiestguy } from "@/lib/fonts";
import ClientPostHogProvider from "@/components/ClientPostHogProvider"; // new file

export const metadata: Metadata = {
  title: "Toby the Story Dog – Pet Gifts, Fun PDFs & Adventures",
  description:
    "Meet Toby the Story Dog! Explore his stories, download fun bonuses, and find perfect gifts for pet lovers.",
  keywords: [
    "Toby the Story Dog",
    "Budget Christmas Present",
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
        url: "https://www.tobythestorydog.com/book-cover.webp",
        width: 360,
        height: 360,
        alt: "Toby the Story Dog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toby Adopts a Hooman – Pet Gifts, Fun PDFs & Adventures",
    description:
      "Meet Toby Adopts a Hooman! Explore his stories, download fun bonuses, and find perfect gifts for pet lovers.",
    images: ["https://www.tobythestorydog.com/book-cover.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    title: "Toby the Story Dog",
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

        {/* JSON-LD FAQ Structured Data for AI & Rich Results */}
        <Script
          type="application/ld+json"
          id="faq-jsonld"
          strategy="afterInteractive"
        >
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is 'Toby Adopts a Hooman'?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Toby Adopts a Hooman is a smart, funny picture book designed for kids and dog lovers. It also comes with bonus PDFs and fun activities on website www.tobythestorydog.com."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I buy the book?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can purchase 'Toby Adopts a Hooman' on Amazon."
                }
              },
              {
                "@type": "Question",
                "name": "Is this book suitable for dogs too?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While Toby Adopts a Hooman is meant for humans to read, dogs love it when you read aloud — especially with treats nearby!"
                }
              }
            ],
            "image": "https://www.tobythestorydog.com/book-cover.webp"
          }
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
