import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "./CTA";
import "../globals.css";

interface FullCaseStudyProps {
  slug: number;
  title: string;
  site_url: string;
  description: string;
  sections: {
    headline: string;
    description: string;
    image?: string;
  }[];
}

const FullCaseStudy: React.FC<FullCaseStudyProps> = ({
  slug,
  site_url,
  title,
  description,
  sections,
}) => {
  return (
    <section className="text-[#2b2b2b] bg-white text-left py-24">
      <div className="md:w-3/5 py-4 px-10">
        <div className=" mb-8">
          <h1 className="text-4xl md:text-5xl font-bold inline-block capitalize">{title}</h1>
          <Link href={site_url} className="text-[#006E80] text-lg font-medium inline-block underline">
            (View Live Site)
          </Link>
        </div>
        <p className="text-lg font-light mb-12">{description}</p>
      </div>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            section.image ? "lg:flex-row py-16" : ""
          } items-start gap-8 mb-12 lg:mb-14`}
          style={{
            backgroundColor: section.image ? "#060D0d" : "white",
            color: section.image ? "white" : "#2b2b2b",
          }}
        >
          <div className="w-full lg:w-3/5 py-4 px-10">
            <h2 className="text-4xl font-bold mb-5">{section.headline}</h2>
            <div dangerouslySetInnerHTML={{__html: section.description}}></div>
            {/* <span className="text-base font-light">{section.description}</span> */}
          </div>
          {section.image && (
            <div className="w-full lg:w-1/2 px-10">
              <Image
                src={section.image}
                alt={section.headline}
                width={500}
                height={300}
                className="w-full h-auto object-cover border border-white"
              />
            </div>
          )}
        </div>
      ))}
      <div className="text-center bg-[#42AFC0] text-white py-20 px-5 lg:px-20 mb-5">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 max-w-[650px] mx-auto">Need a high-converting landing page for your brand?</h2>
        <CTA />
        <p className="text-sm font-light mt-4">Simple Pricing. Clear Deliverables. Full Site Ownership</p>
      </div>
    </section>
  );
};

export default FullCaseStudy;
