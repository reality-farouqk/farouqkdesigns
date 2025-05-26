import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import CTA from "./CTA";
import ScrollRevealWrapper from "./ScrollRevealWrapper";

const CaseStudy: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Mindset in Sales",
      caseStudyLink: "/case-studies/1",
      description:
        "Crafted a mindset-driven website for Nikki Lang, The Mindful Seller, to empower B2B sellers with a bold, human-first platform.",
      image: "/Nikki Lang - Mindset In Sales.png",
    },
    {
      id: 2,
      title: "TCA(Now seventh bear)",
      caseStudyLink: "/case-studies/2",
      description:
        "Redesigned their landing page proactively, reached out, and they instantly loved it—turning a bold move into a real impact.",
      image: "/TCAs Home Page.png",
    },
    {
      id: 3,
      title: "Pixel Forge",
      caseStudyLink: "/case-studies/3",
      description:
        "A Wix demo showcasing a sleek branding agency landing page—crafted to highlight how businesses can elevate their identity.",
      image: "/Pixelforge.png",
    },
    {
      id: 4,
      title: "RS Guttering",
      caseStudyLink: "/case-studies/4",
      description:
        "Revamped a roofing business landing page—giving it a fresh, modern look that aligns with their brand and goals.",
      image: "/RS-Guttering.png",
    },
    {
      id: 5,
      title: "Caleb's Redesign",
      caseStudyLink: "/case-studies/5",
      description:
        "A sleek redesign to refine Caleb’s landing page—crafted to enhance clarity, aesthetics, and user experience.",
      image: "/Caleb-hero-redesign.png",
    },
    {
      id: 6,
      title: "The Consistent Cash Flow",
      caseStudyLink: "/case-studies/6",
      description:
        "Designed a high-converting product landing page for my mentor, Kat Irwin, to drive engagement and sales.",
      image: "/The Consistent Cash Flow Toolkit Landing Page.png",
    },
    // {
    //   id: 7,
    //   title: "Child Care",
    //   caseStudyLink: "/case-studies/3",
    //   description:
    //     "Designed a warm, inviting Wix demo for a child care center—showcasing a nurturing space for infants and children.",
    //   image: "/childscare.png",
    // },
  ];

  return (
    <section
      id="casestudy"
      className="text-[#2b2b2b] bg-white px-5 py-24 md:py-24 md:px-12 border flex flex-col items-center"
    >
      <ScrollRevealWrapper
        delay={200}
        origin="top"
        distance="20px"
        duration={700}
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Case Studies
        </h1>
      </ScrollRevealWrapper>

      <ScrollRevealWrapper
        delay={200}
        origin="bottom"
        distance="20px"
        duration={1000}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-6 md:mb-10">
          {caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="relative w-full h-auto md:h-60 lg:h-auto overflow-hidden border border-gray-900"
            >
              <Image
                width={320}
                height={250}
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#F1F1F1] text-[#2b2b2b] flex flex-col justify-center items-start p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="text-sm underline font-light mb-2">
                  <a
                    href={caseStudy.caseStudyLink}
                    target="_blank"
                    className="mr-2 flex items-center gap-2"
                  >
                    View Case Study
                    <span className="-rotate-45">
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
                <h2 className="text-lg font-normal mb-2 capitalize">
                  {caseStudy.title}
                </h2>
                <p className="text-sm font-light">{caseStudy.description}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollRevealWrapper>
      <CTA />
    </section>
  );
};

export default CaseStudy;
