"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ScrollRevealWrapper from "./ScrollRevealWrapper";
import ClientRouter from "./ClientRouter";

const Header: React.FC = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "font-bold" : "";
  };

  return (
    <ClientRouter>
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 py-5 px-12">
        <ScrollRevealWrapper delay={200} origin="left" distance="20px" duration={800}>
          <div className="logo relative w-[100px] h-[50px]">
            <Link href="/">
              <Image 
                src="/farouqkdesignslogo-transparent.svg" 
                alt="Farouqk Designs Logo" 
                fill
                priority
                className="object-contain"
              />
            </Link>
          </div>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper delay={400} origin="top" distance="20px" duration={800}>
          <nav className="flex items-center">
            <ul className="flex flex-row space-x-6 text-sm">
              <li><Link href="/" className={isActive("/")}>Home</Link></li>
              <li><Link href="/#about" className={isActive("/#about")}>About</Link></li>
              <li><Link href="/case-studies" className={isActive("/case-studies")}>Case Studies</Link></li>
              <li><Link href="/#contact" className={isActive("/#contact")}>Contact</Link></li>
            </ul>
          </nav>
        </ScrollRevealWrapper>
      </header>
    </ClientRouter>
  );
};

export default Header;
