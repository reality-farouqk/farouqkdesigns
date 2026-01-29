import React from 'react';
import ScrollRevealWrapper from './ScrollRevealWrapper';
import { HiLightningBolt, HiOfficeBuilding, HiPencilAlt, HiDeviceMobile } from 'react-icons/hi';

export default function WhatICanHelp() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white text-[#061014]">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollRevealWrapper delay={0} origin="top" distance="20px" duration={600}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#060d0d]">
            What I Can Help You With
          </h2>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper delay={200} origin="bottom" distance="20px" duration={800}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-12 md:mt-16">
            <div className="flex flex-col items-start gap-3 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="flex-none" style={{ color: '#42AFC0' }}>
                <HiLightningBolt className="text-3xl md:text-4xl" />
              </span>
                <h4 className="text-xl md:text-2xl font-semibold mb-1 text-zinc-700">Landing Pages</h4>
                <p className="text-sm md:text-base text-zinc-600">Conversion-optimized landing pages designed to turn visitors into leads or customers.</p>
            </div>

            <div className="flex flex-col items-start gap-3 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="flex-none" style={{ color: '#42AFC0' }}>
                <HiOfficeBuilding className="text-3xl md:text-4xl" />
              </span>
              <h4 className="text-xl md:text-2xl font-semibold mb-1 text-zinc-700">Business Websites</h4>
              <p className="text-sm md:text-base text-zinc-600">Clean, professional websites that position your brand as credible and trustworthy.</p>
            </div>

            <div className="flex flex-col items-start gap-3 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="flex-none" style={{ color: '#42AFC0' }}>
                <HiPencilAlt className="text-3xl md:text-4xl" />
              </span>
              <h4 className="text-xl md:text-2xl font-semibold mb-1 text-zinc-700">Website Copywriting</h4>
              <p className="text-sm md:text-base text-zinc-600">Clear, persuasive copy that communicates your value and moves users to act.</p>
            </div>

            <div className="flex flex-col items-start gap-3 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="flex-none" style={{ color: '#42AFC0' }}>
                <HiDeviceMobile className="text-3xl md:text-4xl" />
              </span>
              <h4 className="text-xl md:text-2xl font-semibold mb-1 text-zinc-700">UI / UX Design</h4>
              <p className="text-sm md:text-base text-zinc-600">User-first layouts that are simple, intuitive, and built for conversion.</p>
            </div>
          </div>
        </ScrollRevealWrapper>
      </div>
    </section>
  );
}
