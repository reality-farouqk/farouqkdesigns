"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import ScrollRevealWrapper from './ScrollRevealWrapper';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { question: 'What services do you offer as a web designer and copywriter?', answer: 'I specialize in designing visually stunning, results-driven websites and crafting persuasive copy that converts. Whether you need a landing page, a full website, or strategic messaging, I can help.' },
    { question: 'How does the 15-minutes strategy call work?', answer: 'The 15-minute strategy call is an opportunity to discuss your goals, challenges, and vision for your website. I’ll provide actionable insights and explain how we can collaborate to achieve your desired results.' },
    { question: 'How long does it take to design and launch a website?', answer: 'The timeline depends on the complexity of your project, but most websites are completed within 1–4 weeks. I prioritize efficiency while ensuring high-quality results.' },
    { question: 'What makes your services different from other web designers?', answer: 'I combine sharp design skills with proven copywriting techniques to create websites that look great and perform even better. My focus is on building sites that drive conversions, reflect your brand, and meet your specific needs. Not shiny websites with no results.' },
    { question: 'Do you offer post-launch support?', answer: 'Yes! I provide post-launch support to ensure your website runs smoothly. This includes minor updates, performance checks, marketing support and guidance on how to manage your site if needed.' },
    { question: 'Why do you watch Anime?', answer: 'Anime helps fuel my creativity with its rich storytelling, stunning visuals, and profound philosophical themes. It challenges conventional thinking and inspires me to create designs and copy that resonate on a deeper level. The attention to detail and emotional depth in anime remind me to blend aesthetics with meaning in everything I craft.' },
  ];

  return (
    <section className="text-[#2b2b2b] bg-white px-5 py-24 md:px-12">
      <div className="text-center mb-5 md:mb-10">
        <ScrollRevealWrapper delay={200} origin="top" distance="20px" duration={1000}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Got Questions? I Have Answers.
          </h1>
        </ScrollRevealWrapper>
      </div>

      <div className="space-y-4 max-w-[800px] mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-5">
            <ScrollRevealWrapper 
              delay={400 + (index * 100)} 
              origin="bottom"
              distance="30px"
              duration={800}
            >
              <div
                className="flex justify-between items-center cursor-pointer gap-2"
                onClick={() => toggleAnswer(index)}
              >
                <h2 className="text-base font-normal">{faq.question}</h2>
                <span className="text-xl md:text-2xl shrink-0">
                  {openIndex === index ? 
                    <Image width={24} height={24} className='w-5 lg:w-6 h-auto' src="/close sign.svg" alt="close sign" /> : 
                    <Image width={24} height={24} className='w-6 h-auto' src="/cross sign.svg" alt="cross sign" />
                  }
                </span>
              </div>
            </ScrollRevealWrapper>
            
            {openIndex === index && (
              <ScrollRevealWrapper 
                delay={500 + (index * 100)} 
                origin="bottom"
                distance="20px"
                duration={600}
              >
                <div className="mt-2 md:mt-4">
                  <p className="text-sm font-light">{faq.answer}</p>
                </div>
              </ScrollRevealWrapper>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;