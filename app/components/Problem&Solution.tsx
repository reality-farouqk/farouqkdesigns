import React from "react";
import CTA from "./CTA";
import Image from "next/image";
import ScrollRevealWrapper from "./ScrollRevealWrapper";

const ProblemSolution: React.FC = () => {
  return (
    <section
      className="bg-cover bg-center px-5 py-24 md:px-12"
      style={{ backgroundImage: "url(/Problem&Solution-bg.png)" }}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5">
        <div className="w-full lg:w-2/5 mb-8 md:mb-0 mx-auto">
          <ScrollRevealWrapper delay={400} origin="left" distance="40px" duration={1200}>
            <Image
              width={300}
              height={350}
              src="/Laptop Mockup.png"
              alt="Laptop Mockup"
              className="w-3/5 h-auto mx-auto"
            />
          </ScrollRevealWrapper>
        </div>
        <div className="w-full lg:w-3/5 text-white p-4 md:p-8">
          <ScrollRevealWrapper delay={600} origin="right" distance="30px" duration={1200}>
            <h1 className="text-4xl lg:text-6xl font-bold mb-5 capitalize text-wrap">
              You Deserve a World-Class Website
            </h1>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper delay={800} origin="right" distance="30px" duration={1200}>
            <p className="text-base md:text-lg font-normal mb-5">
              A beautiful website is important, but a high-performing website
              goes beyond looks. It attracts your ideal clients, establishes you
              as the go-to professional, and gives them reasons to take action.
              <br />
              <br />
              We achieve this by combining sharp design with proven copywriting
              tactics.
              <br />
              <br />
              Ready to boost your brand with a website that works?
            </p>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper delay={1000} origin="bottom" distance="20px" duration={1000}>
            <CTA />
            <p className="text-sm font-semibold mt-3">
              Simple Pricing. Clear Deliverables. Full Site Ownership
            </p>
          </ScrollRevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
