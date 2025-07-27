import React, { useState } from 'react';
import Image from 'next/image';
import ScrollRevealWrapper from './ScrollRevealWrapper';

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: `“Umar helped me with the design of a landing page for a digital product and I couldn't be happier with the results. 

From the initial concept to the final design he showed incredible attention to detail and was able to creatively incorporate my brand. The landing page is not only visually appealing but also perfectly aligned with our goals and target audience. Throughout the project, Umar maintained a high level of professionalism and great communication. As a busy business owner, I appreciate how smoothly everything went - delivered on time with minimal direction from my side.

I highly recommend Umar to anyone looking for a talented, reliable designer who takes initiative. I'm looking forward to working with him again on future projects.”`,
      image: '/Kat Irwin.png',
      name: 'Kat Irwin - Kat Irwin Designs',
    },
    {
      id: 2,
      text: `“Umar is the best to work with! His professionalism and creativity shine in every aspect of his work. his communication was clear, proactive, and collaborative, he kept me in the loop at every stage and seamlessly translated my vision into a stunning, functional website. What truly impressed me was his attention to detail. Prioritizes customer service. He welcomed feedback gracefully, offered smart solutions, and went above and beyond to ensure I was thrilled with the final product."`,
      image: '/isreal-anga.jpg',
      name: 'Isreal Anga - CEO@ParanTechWater',
    },
    {
      id: 3,
      text: `“I could not be more satisfied with the job and the work that Umar has done. He’s an incredible designer, does a really fantastic job putting detailed effort into every element of the website. I would highly, highly recommend you work with him.”`,
      image: '/ronen-pessar.png', // Add the correct image path for Ronen Passar
      name: 'Ronen Passar - Co-Founder, Outbound Operators',
    },
  ];

  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const truncateText = (text: string, limit: number) => {
    if (text.length <= limit) return text;
    return text.substring(0, limit) + '...';
  };

  return (
    <section className="text-[#2b2b2b] bg-cover bg-center px-5 py-24 md:px-12" style={{ backgroundImage: 'url(/Testimonial-bg.png)' }}>
      <ScrollRevealWrapper className="mb-10" delay={200} origin="top" distance="20px" duration={700}>

      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold capitalize mb-12">See What Other Clients Are Saying</h1>
      
      </ScrollRevealWrapper>
      <ScrollRevealWrapper className="mb-10" delay={300} origin="top" distance="20px" duration={700}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 md:mx-11 shadow-lg shadow-[#CCF8FF] h-auto flex flex-col justify-between">
            <p className="text-base font-light mb-4">
              {expanded[testimonial.id]
                ? testimonial.text
                : truncateText(testimonial.text, 200)}
              <span
                className="text-blue-500 cursor-pointer text-xs ml-2"
                onClick={() => toggleReadMore(testimonial.id)}
              >
                {expanded[testimonial.id] ? 'Read Less' : 'Read More'}
              </span>
            </p>
            <div className="flex flex-col items-center">
              <Image
                width={50}
                height={50}
                loading="lazy"
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <p className="text-base font-normal mt-3">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
      </ScrollRevealWrapper>

    </section>
  );
};

export default Testimonial;
