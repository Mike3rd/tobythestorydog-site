"use client";

import Link from "next/link";
import { FaPaw, FaFacebookF, FaInstagram } from "react-icons/fa";
import Modal from "@/components/ui/Modal";
import { trackEvent } from "@/lib/track";
import { readerDogs } from "@/data/readerDogs";
import SubmitDogForm from "@/components/SubmitDogForm";
import DogCard from "@/components/DogCard";

export default function ReaderDogsPage() {
  return (
    <section className="w-full min-h-screen pt-20 pb-24 bg-background px-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-luckiestguy text-text_hero_title ">
            Tail Waggers Club
          </h1>
          <FaPaw className="text-orange w-6 h-6" />
        </div>
        <Link
          href="/"
          className="text-base text-orange font-semibold hover:underline"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Social line */}
      <div className="flex flex-col items-center justify-center space-y-2 mb-4">
        <p className="text-text_hero_subtitle text-base font-rubik sm:text-lg md:text-xl">
          🐶 <strong>Join the Club</strong> → post image, breed, and name on
          @TobyTheStoryDog
        </p>
        <div className="flex space-x-6 justify-center">
          <a
            href="https://facebook.com/TobyTheStoryDog"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("facebook_link_clicked", { location: "dog_readers" })
            }
            className="flex items-center text-color_facebook hover:text-accent transition-colors space-x-2 md:text-xl"
          >
            <FaFacebookF className="w-5 h-5" />
            <span>TobyTheStoryDog</span>
          </a>
          <a
            href="https://instagram.com/TobyTheStoryDog"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent("instagram_link_clicked", { location: "dog_readers" })
            }
            className="flex items-center text-color_instagram hover:text-accent transition-colors space-x-2 md:text-xl"
          >
            <FaInstagram className="w-5 h-5" />
            <span>TobyTheStoryDog</span>
          </a>
        </div>
      </div>

      {/* Divider + text */}
      <div className="w-full flex justify-center mb-2">
        <div className="w-24 h-px bg-gray-300"></div>
      </div>

      {/* Modal Form */}
      <div className="flex justify-center mt-6 ">
        <Modal
          triggerLabel=" or upload it here"
          title="Submit Your Dog’s Photo"
          description="Upload your dog’s picture and info so Toby can feature them!"
        >
          <SubmitDogForm onSuccess={() => console.log("Success!")} />
        </Modal>
      </div>

      {/* Dog Grid */}
      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16">
        {readerDogs.map((dog, index) => (
          <DogCard key={index} dog={dog} />
        ))}
      </div>
    </section>
  );
}
