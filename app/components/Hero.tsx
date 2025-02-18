import React from "react";
import Image from "next/image";
import CTA from "./CTA";

const Hero: React.FC = () => {
  return (
    <section
      className="text-[#2b2b2b] flex flex-col lg:flex-row lg:items-center py-24 px-12 gap-12"
      style={{ backgroundImage: "url(/Hero&AboutSection-bg.png)" }}
    >
      <div className="w-full lg:w-3/4 mb-8 md:mb-0">
        <h3 className="text-sm lg:text-base uppercase font-normal mb-4">
          For Founders & Entrepreneurs
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#060d0d]">
          Crafting Designs That Speak & Words That Sell.
        </h1>
        <h2 className="text-lg font-medium mb-4 text-zinc-700">
          Web Designer & Copywriter blending creativity, strategy, and
          authenticity to build digital experiences that matter.
        </h2>
        <CTA />
        <h6 className="text-sm mt-4 font-bold">
          Simple Pricing. Clear Deliverables. Full Site Ownership
        </h6>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-evenly items-center gap-5">
        <div>
          <div className="flex flex-row items-start gap-2 font-light text-zinc-700">
            <Image className="" src="/quote.png" alt="quote" width={28} height={28} />
            <p className="text-sm mb-4 mt-4">
            Umar helped me with the design of a landing page for a digital
            product and I couldn&apos;t be happier with the results. From the
            initial concept to the final design he showed incredible attention
            to detail and was able to creatively incorporate my brand.
          </p>
          </div>
          <p className="text-sm font-medium text-right mb-4">~ Kat Irwin - Kat Irwin Design</p>
        </div>
        <div>
          <span className="w-32 h-auto">
          <Image
            src="/Umar Farouqk DP.png"
            width={150}
            height={150}
            alt="Umar Farouqk"
            className="w-full h-auto"
          />
          </span>
          <p className="text-center mt-4">Hey, I&apos;m Umar Farouqk.</p>
        </div>
      </div>
    </section >
  );
};
export default Hero;
