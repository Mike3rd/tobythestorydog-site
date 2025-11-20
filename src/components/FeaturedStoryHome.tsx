// src/components/FeaturedStoryHome.tsx
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";
import { getStoryImageUrl } from "@/lib/supabaseStorage"; // ✅ import helper

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function FeaturedStoryHome() {
  const { data: story, error } = await supabase
    .from("stories")
    .select("*")
    .eq("published", true)
    .eq("featured", true)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  console.log("Featured story fetched:", story);

  if (!story || error) return null;

  // ✅ get public URL from Supabase Storage
  const imageUrl = story.featured_image
    ? getStoryImageUrl(story.featured_image)
    : null;

  return (
    <section className="max-w-5xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-fredoka text-text_hero_title mb-6 text-center">
        Featured Toby Tale
      </h2>

      <div className="bg-white rounded-2xl shadow-md p-4 pb-6 hover:shadow-lg transition flex flex-col md:flex-row gap-6">
        {imageUrl && (
          <div className="relative w-full md:w-1/3 h-64 rounded-xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={story.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-fredoka text-orange mb-2">
              {story.title}
            </h3>
            {story.excerpt && (
              <p className="text-gray-700 italic mb-4 ">{story.excerpt}</p>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Link
              href={`/stories/${story.slug}`}
              className="px-6 py-3 bg-buttons text-text_hero_subtitle rounded-full font-fredoka text-lg shadow-md hover:scale-105 hover:brightness-110 transition-transform duration-300 text-center"
            >
              Read More
            </Link>
            <Link
              href="/stories"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full font-fredoka text-lg shadow-md hover:scale-105 hover:brightness-105 transition-transform duration-300 text-center"
            >
              See All Toby Tales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
