"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClarityTracker() {
  const pathname = usePathname();
  const projectId = "qdls91amcl";

  useEffect(() => {
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

    let attempts = 0;
    const maxAttempts = 5;
    const interval = 1000; // 1 second between retries

    const tryClarityCommands = () => {
      try {
        console.log("ClarityTracker: Attempt", attempts + 1, "Checking window.clarity");
        console.log("window.clarity exists:", !!window.clarity);
        console.log("window.clarity type:", typeof window.clarity);

        if (
          typeof window !== "undefined" &&
          window.clarity &&
          typeof window.clarity === "function"
        ) {
          console.log("ClarityTracker: Executing Clarity commands");
          window.clarity("init", projectId);
          console.log("Clarity initialized with projectId:", projectId);
          window.clarity("consent");
          console.log("Clarity consent set");
          window.clarity("setTag", "page", pathname);
          console.log("Clarity tag set:", { page: pathname });
          return true; // Success
        } else {
          console.warn("ClarityTracker: window.clarity is not ready");
          return false; // Retry
        }
      } catch (error) {
        console.error("ClarityTracker: Error executing Clarity commands:", error);
        return false; // Retry
      }
    };

    const intervalId = setInterval(() => {
      attempts++;
      if (tryClarityCommands() || attempts >= maxAttempts) {
        clearInterval(intervalId);
        if (attempts >= maxAttempts) {
          console.error("ClarityTracker: Max attempts reached, Clarity not initialized");
        }
      }
    }, interval);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("error", handleError);
    };
  }, [pathname]);

  return null;
}