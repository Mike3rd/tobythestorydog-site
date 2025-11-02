"use client";

import { FaFacebookF, FaInstagram, FaPaw } from "react-icons/fa";

export default function Footer() {
  // Smooth scroll function for "Back to Top"
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-100 text-gray-700 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
        {/* About Toby */}
        <div className="md:w-1/3 text-center md:text-left">
          <h3 className="text-xl font-fredoka text-orange-600 mb-2">About Toby</h3>
          <p className="text-gray-700 leading-relaxed">
            Toby is a rescue pup who thinks he adopted his human!  
            Follow his adventures and stay wagging with updates. 🐾
          </p>
        </div>

        {/* Social */}
        <div className="md:w-1/3 text-center">
          <h3 className="text-xl font-fredoka text-orange-600 mb-2">Follow Toby</h3>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com/TobyTheStoryDog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-color_facebook hover:text-orange-600 transition text-2xl"
              aria-label="Toby on Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/TobyTheStoryDog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-color_instagram hover:text-orange-600 transition text-2xl"
              aria-label="Toby on Instagram"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Fancy Back to Top */}
          <div className="mt-8">
            <button
              onClick={scrollToTop}
              className="group flex items-center justify-center mx-auto text-gray-600 hover:text-orange-600 transition-transform duration-500"
              aria-label="Back to top"
            >
              <FaPaw
                className="text-2xl mr-2 motion-safe:animate-[bounce_2s_ease-in-out_infinite] group-hover:scale-125 transition-transform duration-300"
              />
              <span className="underline text-sm font-fredoka group-hover:text-orange-600 transition-colors duration-300">
                Back to Top
              </span>
            </button>
          </div>
        </div>

        {/* Newsletter Button */}
        <div className="md:w-1/3 text-center md:text-right">
          <h3 className="text-xl font-fredoka text-orange-600 mb-2">Stay Updated</h3>
          <p className="text-gray-700 mb-2">Sign up for Toby news and bonus downloads!</p>
          <button
            onClick={scrollToContact}
            className="inline-block px-6 py-3 bg-buttons text-text_hero_subtitle rounded-full font-fredoka text-lg shadow-md hover:scale-105 hover:brightness-110 transition-transform duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Toby the Story Dog. All rights reserved.
      </div>
    </footer>
  );
}
