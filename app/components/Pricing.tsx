import React from 'react';
import ScrollRevealWrapper from './ScrollRevealWrapper';
import CTA from './CTA';
import { FiCheck } from 'react-icons/fi';

export default function Pricing() {
  const tiers = [
    {
      id: 1,
      name: 'Basic Package',
      price: '$999',
      description: 'One-time website or landing page setup',
      features: [
        'Complete site design and copy',
        'One-time website or landing page setup',
        'Clear scope and timelines',
        'Full ownership of your site',
        'Optional ongoing support',
      ],
    },
    {
      id: 2,
      name: 'Full Marketing Tier',
      price: '$2.5k+',
      description: 'Complete solution with marketing integration',
      features: [
        'All Basic Package features',
        'Email marketing setup',
        'Full booking system included',
        'Lead magnet setup',
        'SEO optimization',
      ],
      highlighted: true,
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white text-[#061014]">
      <div className="max-w-5xl mx-auto">
        <ScrollRevealWrapper delay={0} origin="top" distance="20px" duration={600}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Simple Pricing
          </h2>
        </ScrollRevealWrapper>

        <ScrollRevealWrapper delay={200} origin="bottom" distance="20px" duration={800}>
          <p className="text-center text-lg text-zinc-600 mb-12">
            No long contracts. No hidden fees. Just focused work that delivers results.
          </p>
        </ScrollRevealWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tiers.map((tier) => (
            <ScrollRevealWrapper
              key={tier.id}
              delay={400 + tier.id * 200}
              origin="bottom"
              distance="30px"
              duration={1000}
            >
              <div
                className={`rounded-lg p-8 border transition-all ${
                  tier.highlighted
                    ? 'border-[#42AFC0] bg-gradient-to-br from-[#42AFC0]/5 to-transparent shadow-lg'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {tier.highlighted && (
                  <div className="mb-4 inline-block">
                    <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#42AFC0' }}>
                      Popular
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold" style={{ color: '#42AFC0' }}>
                    {tier.price}
                  </span>
                </div>
                <p className="text-zinc-600 mb-8 text-sm">{tier.description}</p>

                <div className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5" style={{ color: '#42AFC0' }}>
                        <FiCheck className="w-5 h-5" />
                      </div>
                      <span className="text-sm text-zinc-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <CTA />
              </div>
            </ScrollRevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
