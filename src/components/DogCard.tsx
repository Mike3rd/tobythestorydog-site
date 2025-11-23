"use client";

import Image from "next/image";

export interface Dog {
  name: string;
  breed?: string;
  note?: string;
  image: string;
}

interface DogCardProps {
  dog: Dog;
  priority?: boolean; // Add this line
}

export default function DogCard({ dog, priority = false }: DogCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 pb-6 hover:shadow-lg transition">
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
        <Image
          src={dog.image}
          alt={dog.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority} // Use the prop here
        />
      </div>

      <h2 className="text-2xl font-fredoka text-orange text-center">
        {dog.name}
      </h2>

      {dog.breed && (
        <p className="text-gray-500 text-center mt-1">{dog.breed}</p>
      )}

      {dog.note && (
        <p
          className={`text-gray-700 text-center italic ${
            dog.breed ? "mt-1" : "mt-0.5"
          }`}
        >
          <strong>Toby:</strong> “{dog.note}”
        </p>
      )}
    </div>
  );
}
