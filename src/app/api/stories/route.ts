import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Auto-generate slug from title
function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// GET all published stories
export async function GET() {
  const { data, error } = await supabase
    .from("stories")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST: create or update a story
export async function POST(req: Request) {
  const body = await req.json();

  const { id, title, exerpt, content, featured_image, published } = body;

  // NEW → slug is always generated
  const slug = slugify(title);

  const { data, error } = await supabase
    .from("stories")
    .upsert(
      {
        id: id ?? undefined, // if no id, creates new
        title,
        slug,
        exerpt,
        content,
        featured_image,
        published,
      },
      { onConflict: "id" } // safe upsert
    )
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
