import React from 'react';
import Image from 'next/image';

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      text: `“Umar helped me with the design of a landing page for a digital product and I couldn't be happier with the results. From the initial concept to the final design he showed incredible attention to detail and was able to creatively incorporate my brand.”`,
      image: '/Kat Irwin.png',
      name: 'Kat Irwin - Kat Irwin Designs',
    },
    {
      id: 2,
      text: `“Umar's proactive approach and keen eye for detail truly impressed us. His proposal to enhance our online presence resonated with our vision, and his insights into optimizing user experience were invaluable. Both Cathy and I were particularly drawn to the idea of transitioning to a sleek, one-page website, similar to the concept Umar presented.”`,
      image: '/robert@contentadvisory.png',
      name: 'Robert Rose - CEO@TCA(now Seventh Bear)',
    },
  ];

  return (
    <section className="text-[#2b2b2b] bg-cover bg-center px-5 py-24 md:px-12" style={{ backgroundImage: 'url(/Testimonial-bg.png)' }}>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold capitalize mb-12">See What Others Say</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 md:mx-11 shadow-lg shadow-[#CCF8FF] h-auto flex flex-col justify-between">
            <p className="text-base font-light mb-4">{testimonial.text}</p>
            <div className="flex flex-col items-center">
              <Image width={50} height={50}  src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
              <p className="text-base font-normal mt-3">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;