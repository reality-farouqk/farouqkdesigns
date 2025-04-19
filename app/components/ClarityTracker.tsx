// components/ClarityTracker.tsx
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ClarityTracker() {
  const pathname = usePathname();
  const projectId = "qdls91amcl";
  const [isClarityLoaded, setIsClarityLoaded] = useState(false);

  useEffect(() => {
    // Function to check if Clarity is loaded
    const checkClarityLoaded = () => {
      if (typeof window !== "undefined" && typeof window.clarity === "function") {
        setIsClarityLoaded(true);
      }
    };

    // Check immediately
    checkClarityLoaded();

    // Poll every 100ms until Clarity is loaded (max 5 seconds)
    const interval = setInterval(checkClarityLoaded, 100);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      if (!isClarityLoaded) {
        console.warn("Clarity script failed to load within 5 seconds");
      }
    }, 5000);

    // Cleanup
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    // Run Clarity commands only when loaded and route changes
    if (isClarityLoaded && typeof window !== "undefined" && window.clarity) {
      // Initialize Clarity (only needed once, but safe to call multiple times)
      window.clarity("init", projectId);

      // Set consent (replace with dynamic consent logic if needed)
      window.clarity("consent");

      // Identify user (replace with dynamic values)
      const userId = "user-123"; // Example: Replace with actual user ID from auth
      const sessionId = `session-${Date.now()}`; // Example: Unique session ID
      const pageId = pathname; // Use current route as page ID
      const friendlyName = "Guest"; // Example: Replace with user’s name
      window.clarity("identify", userId, sessionId, pageId, friendlyName);

      // Set custom tags for analytics
      window.clarity("setTag", "page", pathname);
      window.clarity("setTag", "session", sessionId);
      window.clarity("setTag", "user", userId);
    }
  }, [isClarityLoaded, pathname]);

  return null;
}