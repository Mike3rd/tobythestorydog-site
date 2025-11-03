"use client";

import { useEffect } from "react";

export default function ClientPostHogProvider() {
  useEffect(() => {
    import("posthog-js").then((mod) => {
      const posthog = mod.default || mod;
      posthog.init("phc_6FM4koZdRMY7VlPfcoqHAf1AsfCSEFLnx6hieBjlD8O", {
        api_host: "https://app.posthog.com",
        capture_pageview: true,
      });
      console.log("✅ PostHog initialized");
    });
  }, []);

  return null; // no UI needed
}
