"use client";
import Link from "next/link";
import { readerDogs } from "@/data/readerDogs";
import DogCard from "@/components/DogCard";

export default function FeaturedReaderDogs() {
  const featured = readerDogs.slice(0, 3);

  return (
    <section className="w-full py-20 bg-background px-6 flex flex-col items-center text-center">
      <h2 className="text-3xl font-fredoka text-text_hero_title mb-4">
        Tail Waggers Club
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
        {featured.map((dog, index) => (
          <DogCard key={index} dog={dog} />
        ))}
      </div>

      <Link
        href="/reader-dogs"
        className="mt-12 px-8 py-4 bg-buttons text-text_hero_subtitle rounded-full font-fredoka text-lg shadow-lg hover:scale-105 transition-transform"
      >
        More club members →
      </Link>
    </section>
  );
}
