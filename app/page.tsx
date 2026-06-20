"use client";
import Header from "./components/Header";
import Hero from "./components/Hero";
import VideoTestimonial from "./components/VideoTestimonial";
import WhatICanHelp from "./components/WhatICanHelp";
import SlideTextAnimation from "./components/SlideTextAnimation";
import CaseStudy from "./components/CaseStudy";
import ProblemSolution from "./components/Problem&Solution";
import Testimonial from "./components/Testimonial";
import Process from "./components/Process";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <VideoTestimonial />
      <WhatICanHelp />
      <SlideTextAnimation />
      <CaseStudy />
      <ProblemSolution />
      <Testimonial />
      <Process />
      {/* <Pricing /> */}
      <AboutMe />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}
