// components/ClarityTracker.tsx
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClarityTracker() {
  const pathname = usePathname();
  const projectId = "qdls91amcl";

  useEffect(() => {
    // Add global error handler to capture Clarity script errors
    const handleError = (event: ErrorEvent) => {
      console.error("ClarityTracker: Global JS Error:", {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
      });
      if (event.message.includes("Script error") || event.filename.includes("clarity.ms")) {
        console.warn("ClarityTracker: Likely Clarity-related script error detected");
      }
    };

    window.addEventListener("error", handleError);

    // Delay Clarity initialization to ensure script is loaded
    const timer = setTimeout(() => {
      try {
        console.log("ClarityTracker: Checking window.clarity");
        console.log("window.clarity exists:", !!window.clarity);
        console.log("window.clarity type:", typeof window.clarity);

        if (typeof window !== "undefined" && window.clarity) {
          console.log("ClarityTracker: Executing Clarity commands");
          // Initialize Clarity
          window.clarity("init", projectId);
          console.log("Clarity initialized with projectId:", projectId);

          // Set consent (replace with dynamic consent logic if needed)
          window.clarity("consent");
          console.log("Clarity consent set");

          // Simplified tracking to isolate interaction errors
          window.clarity("setTag", "page", pathname);
          console.log("Clarity tag set:", { page: pathname });
        } else {
          console.warn("ClarityTracker: window.clarity is not available");
        }
      } catch (error) {
        console.error("ClarityTracker: Error executing Clarity commands:", error);
      }
    }, 1000);

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener("error", handleError);
    };
  }, [pathname]);

  return null;
}