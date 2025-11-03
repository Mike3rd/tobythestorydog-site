"use client";

import { useEffect } from "react";

export default function ClientPostHogProvider() {
  useEffect(() => {
    import("posthog-js").then((mod) => {
      const posthog = mod.default || mod;
      posthog.init("YOUR_PROJECT_API_KEY", {
        api_host: "https://app.posthog.com",
        capture_pageview: true,
      });
      console.log("✅ PostHog initialized");
    });
  }, []);

  return null; // no UI needed
}
