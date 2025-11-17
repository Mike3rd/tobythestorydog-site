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
}

export default function DogCard({ dog }: DogCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 pb-6 hover:shadow-lg transition">
      <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
        <Image src={dog.image} alt={dog.name} fill className="object-cover" />
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
