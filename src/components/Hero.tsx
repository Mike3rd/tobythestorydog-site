import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import PawPrints from "./PawPrints";
import Lightbox from "./Lightbox";


export default function Hero() {
  return (
    <section className="w-full pt-16 pb-32 bg-gradient-to-br from-accent to-background flex flex-col items-center text-center relative overflow-hidden">
      
      {/* Paw-print background */}
      <PawPrints />

      {/* Book Cover */}
      <div className="mb-8 w-full max-w-xs sm:max-w-sm md:max-w-md z-10">
        <Image
          src="/book-cover2.webp"
          alt="Toby Adopts a Hooman"
          width={360}
          height={360}
          className="rounded-lg shadow-2xl mx-auto"
          loading="eager"
        />
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-luckiestguy mb-3 text-text_hero_title leading-tight z-10">
        Toby Adopts a Hooman
      </h1>

      {/* Subheadline */}
      <p className="text-text_hero_subtitle text-base font-rubik sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto px-4 z-10">
        <b>The bedtime story made for dogs (and their hoomans too!) — a wag-worthy adventure the whole family will love.</b> <br />
        Follow Toby’s journey from stray to family — a perfect holiday gift for the dog (or human!) who has everything.
      </p>

      {/* Holiday Offer */}
      <div className="text-text_hero_title font-fredoka text-lg sm:text-xl mb-6 z-10">
        🎁 <strong>Holiday Special:</strong> Paperback just <span className="text-text_hero_title font-bold">$11.99</span> <span className="line-through opacity-70 text-text_hero_subtitle">$14.99</span>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 z-10">
        <a
          href="#get-the-book"
          className="px-8 py-4 bg-buttons text-text_hero_subtitle rounded-full font-fredoka text-lg sm:text-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:brightness-110 active:scale-95"
        >
          Buy on Amazon
        </a>
          <Lightbox
  imageSrc="/book-preview.webp"
  alt="Sample Page from Toby Adopts a Hooman"
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
