"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  origin?: "top" | "right" | "bottom" | "left";
  distance?: string;
  duration?: number;
}

/**
 * ScrollRevealWrapper now returns children directly and does NOT use the
 * scrollreveal library. This removes all scroll-reveal behavior while
 * keeping the component API so other files don't need edits.
 */
export default function ScrollRevealWrapper({
  children,
  className,
}: Props) {
  return <div className={className}>{children}</div>;
}