import React from 'react';
import CTA from './CTA';
import Image from 'next/image';
import ScrollRevealWrapper from './ScrollRevealWrapper';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="text-[#2b2b2b] bg-cover bg-center px-5 py-24 md:px-12" style={{ backgroundImage: 'url(/Hero&AboutSection-bg.png)' }}>
      <div className="flex flex-col-reverse lg:flex-row items-start gap-5">
        <div className="w-full lg:w-1/2 p-4 md:p-8">
          <ScrollRevealWrapper delay={400} origin="left" distance="30px" duration={1200}>
            <h2 className="text-4xl lg:text-6xl font-bold mb-5">Who am I? <br/>Let&apos;s find out!</h2>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper delay={600} origin="left" distance="30px" duration={1200}>
            <p className="text-base mb-5">
I’m Farouqk — a web designer and copywriter focused on building websites that don’t just look good, but actually work.

I help founders and entrepreneurs turn ideas into clean, high-converting websites that communicate clearly, build trust, and drive action.

My approach is simple: clarity over clutter, speed over perfection, and results over trends.
              <br /><br />
              Let&apos;s discuss your ideas.
            </p>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper delay={800} origin="bottom" distance="20px" duration={1000}>
            <CTA />
            <p className="text-sm font-semibold mt-2">Simple Pricing. Clear Deliverables. Full Site Ownership</p>
          </ScrollRevealWrapper>
        </div>

        <div className="w-full lg:w-1/2 mb-8 md:mb-0 mx-auto">
          <ScrollRevealWrapper delay={400} origin="right" distance="40px" duration={1200}>
            <Image src="/Umar Farouqk - About me DP.png" alt="About Me" className="w-[350px] lg:w-[450px] h-auto mx-auto" width={400} height={450} />
          </ScrollRevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;