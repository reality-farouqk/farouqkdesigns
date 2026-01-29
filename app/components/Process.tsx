import React from 'react';
import Image from 'next/image';
import ScrollRevealWrapper from './ScrollRevealWrapper';

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: '/call-chat-bold.svg',
      heading: 'Quick Strategy Call',
      description: `We clarify your goals, audience, and what success looks like.`,
    },
    {
      id: 2,
      icon: '/analytics-01.svg',
      heading: 'Design & Copy Execution',
      description: `I design and write everything — focused on clarity, speed, and conversion.`,
    },
    {
      id: 3,
      icon: '/hugeicons_note.svg',
      heading: 'Review & Refinement',
      description: 'You get revisions to ensure it aligns perfectly with your vision.',
    },
    {
      id: 4,
      icon: '/rocket-launch.svg',
      heading: 'Launch & Ownership',
      description: 'Your site goes live. You fully own everything.',
    },
  ];

  return (
    <section className="bg-[#060d0d] text-white px-5 py-24 md:px-12">
      <div className="text-center mb-12">
        <ScrollRevealWrapper delay={200} origin="top" distance="20px" duration={1000}>
          <h2 className="text-base font-semibold md:text-lg uppercase md:font-normal mb-4">How It Works</h2>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper delay={400} origin="top" distance="30px" duration={1200}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize mb-5">My Simple Process</h2>
        </ScrollRevealWrapper>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {steps.map((step) => (
          <ScrollRevealWrapper 
            key={step.id} 
            delay={600 + (step.id * 200)} 
            origin="bottom" 
            distance="40px" 
            duration={1200}
          >
            <div className="p-6 md:px-20 lg:p-6 text-center">
              <Image width={60} height={60} src={step.icon} alt={step.heading} className="w-24 h-24 mx-auto mb-5" />
              <h3 className="text-lg font-semibold mb-5 capitalize">{step.heading}</h3>
              <p className="text-sm font-normal">{step.description}</p>
            </div>
          </ScrollRevealWrapper>
        ))}
      </div>
    </section>
  );
};

export default Process;