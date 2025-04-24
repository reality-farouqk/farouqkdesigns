"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  origin?: 'top' | 'right' | 'bottom' | 'left';
  distance?: string;
  duration?: number;
}

export default function ScrollRevealWrapper({
  children,
  className,
  delay = 200,
  origin = 'bottom',
  distance = '20px',
  duration = 700,
}: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const initScrollReveal = async () => {
      const ScrollReveal = (await import('scrollreveal')).default;
      
      if (sectionRef.current) {
        ScrollReveal().reveal(sectionRef.current, {
          reset: true,
          delay,
          distance,
          duration,
          easing: "ease-out",
          origin,
        });
      }
    };

    initScrollReveal();
  }, [delay, distance, duration, origin, isMounted]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}