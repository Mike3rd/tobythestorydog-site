// src/app/stories/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";
import { getStoryImageUrl } from "@/lib/supabaseStorage";

interface StoryPageProps {
  params: { slug: string };
}

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function StoryPage(props: StoryPageProps) {
  const { slug } = await props.params; // unwrap params

  // Fetch the main story
  const { data: story, error } = await supabase
    .from("stories")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (!story || error) return <p>Story not found.</p>;

  const imageUrl = story.featured_image
    ? getStoryImageUrl(story.featured_image)
    : null;

  // Fetch other stories for the right rail
  const { data: otherStories } = await supabase
    .from("stories")
    .select("title, slug")
    .eq("published", true)
    .neq("slug", slug)
    .order("created_at", { ascending: false })
    .limit(5);

  return (
    <section className="max-w-6xl mx-auto my-12 px-4">
      {/* Back to Home */}
      <Link
        href="/"
        className="text-base text-orange font-semibold hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </Link>

      {/* Main content + Right Rail */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Story content */}
        <div className="flex-1">
          {/* Row 1: Image + Title/Date/Excerpt */}
          <div className="flex flex-col md:flex-row gap-6 mb-8 items-start">
            {imageUrl && (
              <div className="relative w-48 h-48 md:w-48 md:h-48 rounded-xl overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                <Image
                  src={imageUrl}
                  alt={story.title}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            )}

            <div className="flex-1 flex flex-col justify-start">
              <h1 className="text-3xl font-fredoka text-text_hero_title mb-2">
                {story.title}
              </h1>
              {story.updated_at && (
                <p className="text-sm text-gray-500 mb-2">
                  Published: {new Date(story.updated_at).toLocaleDateString()}
                </p>
              )}
              {story.excerpt && (
                <div className="text-gray-700 italic whitespace-pre-line">
                  {story.excerpt.split("\n\n").map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Row 2: Full story content */}
          <div className="text-gray-800 whitespace-pre-line">
            {story.content.split("\n\n").map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right Rail */}
        {otherStories && otherStories.length > 0 && (
          <aside className="lg:w-1/3">
            <h3 className="text-xl font-fredoka text-orange mb-4">
              Other Stories
            </h3>
            <ul className="space-y-2">
              {otherStories.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/stories/${s.slug}`}
                    className="text-gray-700 hover:text-orange hover:underline"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </section>
  );
}
