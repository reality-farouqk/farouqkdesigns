import React from 'react';
import Image from 'next/image';
import ScrollRevealWrapper from './ScrollRevealWrapper';

const Process: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: '/call-chat-bold.svg',
      heading: '15 minutes call',
      description: `We'll have a 15 minutes call where you'll tell me all your needs to understand your business better.`,
    },
    {
      id: 2,
      icon: '/analytics-01.svg',
      heading: 'I write Copy, Design and you review',
      description: `I'll work on the project based on the solution we deduced.`,
    },
    {
      id: 3,
      icon: '/rocket-launch.svg',
      heading: 'We launch',
      description: 'We launch your newly created website and prepare for post-launch.',
    },
  ];

  return (
    <section className="bg-[#060d0d] text-white px-5 py-24 md:px-12">
      <div className="text-center mb-12">
        <ScrollRevealWrapper delay={200} origin="top" distance="20px" duration={1000}>
          <h2 className="text-base font-semibold md:text-lg uppercase md:font-normal mb-4">Effortless process</h2>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper delay={400} origin="top" distance="30px" duration={1200}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold capitalize mb-5">No work on your end</h1>
        </ScrollRevealWrapper>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {steps.map((step) => (
          <ScrollRevealWrapper 
            key={step.id} 
            delay={600 + (step.id * 200)} 
            origin="bottom" 
            distance="40px" 
            duration={1200}
          >
            <div className="p-6 md:px-20 lg:p-6 text-center">
              <Image width={100} height={100} src={step.icon} alt={step.heading} className="w-24 h-24 mx-auto mb-5" />
              <h3 className="text-2xl font-semibold mb-5 capitalize">{step.heading}</h3>
              <p className="text-md font-normal">{step.description}</p>
            </div>
          </ScrollRevealWrapper>
        ))}
      </div>
    </section>
  );
};

export default Process;