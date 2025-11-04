// src/lib/track.ts
"use client";

import posthog from "posthog-js";

// Define props type
type EventProps = Record<string, unknown> | undefined;

/**
 * Wrapper for PostHog capture
 * @param eventName - Name of the event in PostHog
 * @param props - Optional additional data about the event
 */
export const trackEvent = (eventName: string, props?: EventProps) => {
  if (typeof window !== "undefined" && posthog && posthog.capture) {
    posthog.capture(eventName, props);
  }
};
