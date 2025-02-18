import React from "react";
// import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 py-5 px-12">
      <div className="logo">
        <a href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={50} />
        </a>
      </div>
      <nav className='flex items-center'>
        <ul className='flex flex-row space-x-6 text-sm'>
          {/* <li><a href="/">Home</a></li> */}
          <li><a href="#about">About</a></li>
          <li><a href="#casestudy">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
