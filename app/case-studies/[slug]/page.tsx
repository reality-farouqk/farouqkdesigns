import React from "react";
import Link from "next/link";
import FullCaseStudy from "../../components/FullCaseStudy";
import FAQ from "../../components/FAQ";
import Image from "next/image";
import { Metadata } from 'next';
import ScrollRevealWrapper from "../../components/ScrollRevealWrapper";
import { caseStudies } from "../../data/caseStudies";

// Define proper types for Next.js dynamic route parameters
type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>; // Fix: Wrap in Promise
};

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const caseStudy = caseStudies.find(
    (study) => study.slug === Number(resolvedParams.slug)
  );

  return {
    title: caseStudy ? `Case Study - ${caseStudy.title}` : 'Case Study Not Found',
    description: caseStudy?.description || 'Case study details',
  };
}

// Page component with correct typing
export default async function CaseStudyPage({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams; // Await searchParams to satisfy type
  const { slug } = resolvedParams;

  const caseStudy = caseStudies.find(
    (study) => study.slug === Number(slug)
  );

  if (!caseStudy) {
    return (
      <div className="text-gray-950 flex flex-col justify-center items-center h-screen">
        <ScrollRevealWrapper delay={200} origin="top" distance="20px" duration={1000}>
          <p className="text-5xl font-extrabold w-full text-center">
            Case study not found
          </p>
        </ScrollRevealWrapper>
        <br />
        <ScrollRevealWrapper delay={300} origin="top" distance="20px" duration={1000}>
          <Link href="/" className="text-2xl font-medium capitalize underline">
            go back to home page
          </Link>
        </ScrollRevealWrapper>
      </div>
    );
  }

  // Calculate next case study slug with wraparound
  const nextSlug = caseStudies.find(study => study.slug === caseStudy.slug + 1) 
    ? caseStudy.slug + 1 
    : 1;

  return (
    <>
      <div className="fixed bottom-20 right-40 z-[100]">
        <Link href={`/case-studies/${nextSlug}`}>
          <span className="text-sm text-gray-950 font-light capitalize bg-[#FFD3CC] hover:bg-[#CCF8FF] px-4 py-2 rounded-full shadow-lg flex items-center gap-1">
            next Case study
            <Image
              src="/solar_arrow-left-outline.png"
              alt="arrow"
              width={8}
              height={8}
              className="inline-block w-4 h-auto"
            />
          </span>
        </Link>
      </div>
      <FullCaseStudy {...caseStudy} />
      <FAQ />
    </>
  );
}