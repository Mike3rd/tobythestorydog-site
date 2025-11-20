"use client";

import Image from "next/image";
import Link from "next/link";

interface StoryCardProps {
  story: {
    title: string;
    slug: string;
    excerpt: string | null;
    featured_image: string | null;
  };
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 pb-6 hover:shadow-lg transition">
      {/* Image */}
      {story.featured_image && (
        <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4">
          <Image
            src={story.featured_image}
            alt={story.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Title */}
      <h2 className="text-2xl font-fredoka text-orange text-center">
        {story.title}
      </h2>

      {/* Excerpt */}
      {story.excerpt && (
        <p className="text-gray-700 text-center italic mt-2 px-2">
          {story.excerpt}
        </p>
      )}

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <Link
          href={`/stories/${story.slug}`}
          className="bg-orange text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Read More
        </Link>

        <Link
          href="/stories"
          className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
        >
          See All Stories
        </Link>
      </div>
    </div>
  );
}
