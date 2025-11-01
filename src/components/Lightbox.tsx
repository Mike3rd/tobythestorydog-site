// src/components/Lightbox.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface LightboxProps {
  imageSrc: string;
  alt: string;
  triggerLabel?: string; // optional button label
}

export default function Lightbox({ imageSrc, alt, triggerLabel }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger button - outline style */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-3 border-2 border-buttons text-buttons rounded-full font-fredoka text-lg sm:text-xl hover:bg-buttons hover:text-white transition"
        aria-label="Open lightbox"
      >
        {triggerLabel || "View Sample Page"}
      </button>

      {/* Lightbox overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-lg mx-4 sm:mx-0"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-white text-2xl p-2 hover:text-accent"
                aria-label="Close lightbox"
              >
                <FaTimes />
              </button>

              {/* Image */}
              <Image
                src={imageSrc}
                alt={alt}
                width={600}
                height={800}
                className="rounded-lg mx-auto object-contain"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
