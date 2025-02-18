import React from 'react';
import CTA from './CTA';
import Image from 'next/image';

const AboutMe: React.FC = () => {
  return (
    <section className="text-[#2b2b2b] bg-cover bg-center px-5 py-24 md:px-12" style={{ backgroundImage: 'url(/Hero&AboutSection-bg.png)' }}>
      <div className="flex flex-col-reverse lg:flex-row items-start gap-5">
        <div className="w-full lg:w-1/2 p-4 md:p-8">
          <h1 className="text-4xl lg:text-6xl font-bold mb-5">Who am I? <br/>Let&apos;s find out!</h1>
          <p className="text-base mb-5">
            I&apos;m Umar Sulaiman Mailafiya (Farouqk), a passionate designer and writer who turns ideas into digital realities. Whether crafting intuitive websites or compelling copy, I&apos;m driven by creativity, perseverance, and faith.
            <br /><br />
            When I&apos;m not building stunning websites that convert, you might find me strategizing my next victory in Call of Duty, watching intuitive anime that challenges my brain cells, or diving into self-improvement books on finance and skill acquisition.
            <br /><br />
            My core values are perseverance, consistency, and honesty. Building long-term partnerships and seeing my clients win is my ultimate win.
            <br /><br />
            Passionate about writing that connects with my audience on a deeper level.
            <br /><br />
            Ready to chat about your website project?
            <br /><br />
            Let&apos;s discuss your ideas.
          </p>
          <CTA />
          <p className="text-sm font-semibold mt-2">Simple Pricing. Clear Deliverables. Full Site Ownership</p>
        </div>
        <div className="w-full lg:w-1/2 mb-8 md:mb-0 mx-auto">
          <Image src="/Umar Farouqk - About me DP.png" alt="About Me" className="w-[350px] lg:w-[450px] h-auto mx-auto" width={400} height={450} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;