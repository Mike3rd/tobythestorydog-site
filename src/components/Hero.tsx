"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import PawPrints from "./PawPrints";
import Lightbox from "./Lightbox";
import { FaPaw } from "react-icons/fa";
import { trackEvent } from "@/lib/track";

export default function Hero() {
  return (
    <section className="w-full pt-16 pb-32 bg-gradient-to-br from-accent to-background flex flex-col items-center text-center relative overflow-hidden">
      {/* Paw-print background */}
      <PawPrints />

      {/* Book Cover */}
      <div className="mb-8 w-full max-w-xs sm:max-w-sm md:max-w-md z-10 relative mx-auto">
        <a
          href="https://www.amazon.com/dp/B0FYTD9T81"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy Toby the Story Dog on Amazon"
          className="block group"
        >
          <Image
            src="/book-cover.webp"
            alt="Toby Adopts a Hooman"
            width={360}
            height={360}
            className="rounded-lg shadow-2xl mx-auto"
            loading="eager"
          />

          {/* Amazon Badge */}
          <span className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-orange text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md group-hover:brightness-110 transition">
            Available on Amazon
          </span>
        </a>
      </div>

      {/* Headline */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-luckiestguy mb-3 text-text_hero_title leading-tight z-10 text-center md:text-left">
        Toby Adopts a Hooman
      </h1>

      {/* Right: Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-4 px-4 sm:px-6 md:px-8">
        {/* Subheading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-fredoka text-orange leading-snug">
          A First-of-Its-Kind Storytime Book Made for Dogs and Their Humans
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Read{" "}
          <span className="font-semibold text-orange italic">
            Toby Adopts a Hooman
          </span>{" "}
          together and discover a tail-wagging adventure full of humor, hidden
          surprises, and gentle lessons about kindness, courage, and adoption.
          The perfect holiday gift for the dog (or human!) who has everything.
        </p>

        {/* Feature Highlights */}
        <ul className="text-gray-800 text-base mt-6 space-y-2 font-semibold text-left">
          <li className="flex items-start justify-start">
            <FaPaw className="text-orange flex-shrink-0 w-5 h-5 mr-2 mt-1" />
            Interactive fun: “Give your dog a treat!” and “High-five your pup!”
          </li>

          <li className="flex items-start justify-start">
            <FaPaw className="text-orange flex-shrink-0 w-5 h-5 mr-2 mt-1" />
            Bonus fun! Hidden bones for kids to find on each page — Easter eggs
            and clever references for grown-ups. (There are 10 hidden Easter
            eggs and references in total — can you find them all?)
          </li>

          <li className="flex items-start justify-start">
            <FaPaw className="text-orange flex-shrink-0 w-5 h-5 mr-2 mt-1" />
            Perfect bedtime story for kids and furry friends
          </li>

          <li className="flex items-start justify-start">
            <FaPaw className="text-orange flex-shrink-0 w-5 h-5 mr-2 mt-1" />A
            feel-good gift that celebrates love and rescue
          </li>
        </ul>
      </div>

      {/* Holiday Offer */}
      <div className="text-text_hero_title font-fredoka text-lg sm:text-xl mt-4 mb-6 z-10 text-center md:text-left">
        🎁 <strong>Holiday Special:</strong> Paperback just{" "}
        <span className="text-text_hero_title font-bold">$11.99</span>{" "}
        <span className="line-through opacity-70 text-text_hero_subtitle">
          $14.99
        </span>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 z-10">
        <a
          href="https://www.amazon.com/dp/B0FYTD9T81"
          onClick={(e) => {
            e.preventDefault(); // stop immediate navigation
            trackEvent("amazon_button_clicked", { location: "hero_section" });
            // open Amazon in a new tab after firing event
            window.open(
              "https://www.amazon.com/dp/B0FYTD9T81",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          className="px-8 py-4 bg-buttons text-text_hero_subtitle rounded-full font-fredoka text-lg sm:text-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:brightness-110 active:scale-95"
        >
          Buy on Amazon
        </a>
        <Lightbox
          imageSrc="/book-preview.webp"
          alt="Sample Page from Toby Adopts a Hooman"
          onOpen={() =>
            trackEvent("view_sample_clicked", { location: "hero_section" })
          }
          triggerLabel="View Sample Page"
        />
      </div>

      {/* Social Line */}
      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="text-text_hero_subtitle text-base font-rubik sm:text-lg md:text-xl">
          🐶 <strong>Join the Pack</strong> → Follow @TobyTheStoryDog
        </p>
        <div className="flex space-x-6 justify-center">
          <a
            href="https://facebook.com/TobyTheStoryDog"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("facebook_link_clicked", { location: "hero_section" })
            }
            className="flex items-center text-color_facebook hover:text-accent transition-colors space-x-2 md:text-xl"
            aria-label="Visit Toby the Story Dog on Facebook"
          >
            <FaFacebookF className="w-5 h-5" />
            <span>TobyTheStoryDog</span>
          </a>

          <a
            href="https://instagram.com/TobyTheStoryDog"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("instagram_link_clicked", { location: "hero_section" })
            }
            className="flex items-center text-color_instagram hover:text-accent transition-colors space-x-2 md:text-xl"
            aria-label="Visit Toby the Story Dog on Instagram"
          >
            <FaInstagram className="w-5 h-5" />
            <span>TobyTheStoryDog</span>
          </a>
        </div>
      </div>
    </section>
  );
}
