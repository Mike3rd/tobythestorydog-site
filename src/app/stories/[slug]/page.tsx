// src/app/stories/[slug]/page.tsx
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";
import Image from "next/image";
import { notFound } from "next/navigation";

// Server-side Supabase client
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface Props {
  params: { slug: string };
}

// Server component for a single story
export default async function StoryPage({ params }: Props) {
  const { slug } = params;

  // Fetch story
  const { data: story, error } = await supabase
    .from("stories")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  // Add these logs
  console.log("Slug param:", slug);
  console.log("Story fetched:", story);
  console.log("Supabase error:", error);

  if (error || !story) {
    return notFound(); // 404 if not found
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-fredoka text-orange mb-4">{story.title}</h1>

      {story.featured_image && (
        <div className="relative w-full h-96 mb-6">
          <Image
            src={story.featured_image}
            alt={story.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}

      {story.excerpt && (
        <p className="text-lg text-gray-700 mb-6 italic">{story.excerpt}</p>
      )}

      <div
        className="prose max-w-full"
        dangerouslySetInnerHTML={{ __html: story.content }}
      />
    </section>
  );
}
