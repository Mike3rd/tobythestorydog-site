// src/lib/supabaseStorage.ts
import { supabase } from "./supabase";

export function getStoryImageUrl(fileName: string) {
  if (!fileName) return null;

  // bucket name is 'story-images'
  return supabase.storage.from("story-images").getPublicUrl(fileName).data
    .publicUrl;
}
