"use client"
import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="text-white">
      <div className="bg-[#060D0D] p-5 md:p-12">
        <div className="space-y-16">
          <div className="space-y-10 w-full">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold capitalize">say me hello</p>
            <a href="mailto:umar@farouqkdesigns.com" className="block text-left md:text-center text-3xl lg:text-5xl font-normal text-wrap underline lowercase overflow-x-hidden">
                umar@farouqkdesigns.com
            </a>
          </div>
          <div className="flex justify-center space-x-5 md:space-x-10 lg:space-x-20">
            <a
              href="https://www.linkedin.com/in/farouqkdesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#0A66C2] hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://www.instagram.com/farouqkdesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#D8003D] hover:scale-110"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.twitter.com/farouqkdesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-[#7B7D79] hover:scale-110"
            >
              <FaXTwitter size={28} />
            </a>
          </div>
        </div>
      </div>
      <div className="text-xs font-light text-center bg-[#004955] p-6 md:p-5 space-x-1">
        <p>Built with ♥️, driven by purpose ✴️.</p> <br />
        <p>
          Farouqk Designs © 2025 All rights reserved 
          {/* | Privacy Policy / Terms */}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
