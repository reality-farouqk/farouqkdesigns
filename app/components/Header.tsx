import React from "react";
import { Link } from "react-router-dom";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-center items-center py-5 px-12 h-20">
      <div className="logo">
        <a href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={50} />
        </a>
      </div>
      {/* <nav className='flex items-center'>
        <ul className='flex flex-row space-x-6 text-sm'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
