import React from "react";
import Image from "next/image";
import Link from "next/link";
import CTA from "./CTA";
import "../globals.css";
import { CaseStudy } from "../data/caseStudies";
import ScrollRevealWrapper from "./ScrollRevealWrapper";

interface Props extends CaseStudy {}

const FullCaseStudy: React.FC<Props> = ({ title, description, sections, site_url }) => {
  return (
    <section className="text-[#2b2b2b] bg-white text-left pt-24">
      <div className="md:w-3/5 py-4 px-5 md:px-10">
        <div className="mb-8">
          <ScrollRevealWrapper delay={200} origin="left" distance="30px" duration={1000}>
            <h1 className="text-5xl md:text-6xl font-bold inline-block capitalize">{title}</h1>
          </ScrollRevealWrapper>
          <ScrollRevealWrapper delay={300} origin="left" distance="30px" duration={1000}>
            <Link href={site_url} target="_blank" className="text-[#006E80] text-lg font-medium inline-block underline">
              (View Live Site)
            </Link>
          </ScrollRevealWrapper>
        </div>
        <ScrollRevealWrapper delay={400} origin="left" distance="30px" duration={1000}>
          <p className="text-lg font-light mb-12">{description}</p>
        </ScrollRevealWrapper>
      </div>

      {sections.map((section, index) => {
        const hasMedia = section.image || section.video;
        const isDark = !!hasMedia;
        return (
          <div
            key={index}
            className={`flex flex-col ${
              hasMedia ? "lg:flex-row py-16" : ""
            } items-start gap-8 mb-12 lg:mb-14`}
            style={{
              backgroundColor: isDark ? "#060D0d" : "white",
              color: isDark ? "white" : "#2b2b2b",
            }}
          >
            <div className="w-full lg:w-4/5 py-4 px-5 lg:px-10">
              <ScrollRevealWrapper delay={400 + (index * 100)} origin={index % 2 === 0 ? "left" : "right"} distance="40px" duration={1000}>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">{section.headline}</h2>
              </ScrollRevealWrapper>
              <ScrollRevealWrapper delay={500 + (index * 100)} origin={index % 2 === 0 ? "left" : "right"} distance="40px" duration={1000}>
                <div dangerouslySetInnerHTML={{__html: section.description}}></div>
              </ScrollRevealWrapper>
            </div>
            {section.video ? (
              <div className="w-full lg:w-1/2 flex items-center justify-center">
                <ScrollRevealWrapper delay={600 + (index * 100)} origin={index % 2 === 0 ? "right" : "left"} distance="40px" duration={1000}>
                  <div className="px-10 h-full w-full">
                    <video
                      controls
                      autoPlay
                      muted
                      loop
                      style={{ width: "100%", objectFit: "cover" }}
                      className="rounded-lg my-4 bg-black"
                    >
                      <source src={section.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </ScrollRevealWrapper>
              </div>
            ) : section.image ? (
              <div className="w-full lg:w-1/2">
                <ScrollRevealWrapper delay={600 + (index * 100)} origin={index % 2 === 0 ? "right" : "left"} distance="40px" duration={1000}>
                  <div className="px-10 h-full">
                    <Image
                      src={section.image}
                      alt={section.headline}
                      width={800}
                      height={450}
                      className="rounded-lg my-4"
                    />
                  </div>
                </ScrollRevealWrapper>
              </div>
            ) : null}
          </div>
        );
      })}

      <div className="text-center bg-[#42AFC0] text-white py-20 px-5 lg:px-20">
        <ScrollRevealWrapper delay={800} origin="bottom" distance="30px" duration={1000}>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 max-w-[650px] mx-auto">
            Need a high-converting landing page for your brand?
          </h2>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper delay={900} origin="bottom" distance="30px" duration={1000}>
          <CTA />
        </ScrollRevealWrapper>
        <ScrollRevealWrapper delay={1000} origin="bottom" distance="30px" duration={1000}>
          <p className="text-sm font-light mt-4">
            Simple Pricing. Clear Deliverables. Full Site Ownership
          </p>
        </ScrollRevealWrapper>
      </div>
    </section>
  );
};

export default FullCaseStudy;
