// src/components/StoryRightRail.tsx
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function StoryRightRail() {
  const { data: stories } = await supabase
    .from("stories")
    .select("title, slug")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (!stories || stories.length === 0) return null;

  return (
    <aside className="w-full md:w-1/4 p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-xl font-fredoka text-orange mb-4">All Stories</h3>
      <ul className="space-y-2">
        {stories.map((story) => (
          <li key={story.slug}>
            <Link
              href={`/stories/${story.slug}`}
              className="text-text_hero_title hover:text-orange transition-colors"
            >
              {story.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
