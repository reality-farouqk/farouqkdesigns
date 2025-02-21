"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 py-5 px-12">
      <div className="logo">
        <Link href="/">
          <Image src="/farouqkdesignslogo-transparent.svg" alt="Logo" width={100} height={50} />
        </Link>
      </div>
      <nav className='flex items-center'>
        <ul className='flex flex-row space-x-6 text-sm'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/case-studies">Case Studies</Link></li>
          <li><Link href="/#casestudy">Services</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
