"use client";
import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ScrollRevealWrapper from "./ScrollRevealWrapper";

const Footer: React.FC = () => {
  return (
    <footer className="text-white">
      <div className="bg-[#060D0D] p-5 md:p-12">
        <div className="space-y-16">
          <div className="space-y-10 w-full">
            <ScrollRevealWrapper
              delay={200}
              origin="left"
              distance="30px"
              duration={1000}
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold capitalize">
                say me hello
              </p>
            </ScrollRevealWrapper>

            <ScrollRevealWrapper
              delay={400}
              origin="right"
              distance="30px"
              duration={1000}
            >
              <a
                href="mailto:umar@farouqkdesigns.com"
                className="block text-left md:text-center text-3xl lg:text-5xl font-normal text-wrap underline lowercase overflow-x-hidden"
              >
                umar@farouqkdesigns.com
              </a>
            </ScrollRevealWrapper>
          </div>

          <ScrollRevealWrapper
            delay={600}
            origin="bottom"
            distance="20px"
            duration={800}
          >
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
          </ScrollRevealWrapper>
        </div>
      </div>
      <div className="text-xs font-light text-center bg-[#004955] py-6 px-4 md:p-5">
        <ScrollRevealWrapper
          delay={800}
          origin="bottom"
          distance="10px"
          duration={800}
        >
          <div className="flex flex-col items-center space-y-2">
            <p>Built with ♥️, driven by purpose ✴️</p>
            <p>Farouqk Designs © 2025 All rights reserved</p>
          </div>
        </ScrollRevealWrapper>
      </div>
    </footer>
  );
};

export default Footer;
