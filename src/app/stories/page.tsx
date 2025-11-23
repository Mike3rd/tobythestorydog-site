// src/app/stories/page.tsx
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";
import { FaPaw } from "react-icons/fa";
import { getStoryImageUrl } from "@/lib/supabaseStorage";

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function StoriesPage() {
  const { data: stories, error } = await supabase
    .from("stories")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error || !stories || stories.length === 0)
    return <p className="text-center mt-12">No stories found.</p>;

  return (
    <section className="max-w-5xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-luckiestguy text-text_hero_title ">
            All Stories
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

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => {
          const imageUrl = story.featured_image
            ? getStoryImageUrl(story.featured_image)
            : undefined;

          return (
            <div
              key={story.id}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition flex flex-col"
            >
              {imageUrl && (
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src={imageUrl}
                    alt={story.title}
                    fill
                    className="object-cover"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              )}

              <h3 className="text-xl font-fredoka text-orange mb-2">
                {story.title}
              </h3>

              {story.excerpt && (
                <p className="text-gray-700 italic mb-4">{story.excerpt}</p>
              )}

              <Link
                href={`/stories/${story.slug}`}
                className="self-start mt-auto px-4 py-2 bg-buttons text-text_hero_subtitle rounded-full font-fredoka shadow-md hover:scale-105 hover:brightness-110 transition-transform duration-300"
              >
                Read Story
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
