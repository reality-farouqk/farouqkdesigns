import React from "react";
import Link from "next/link";
import FullCaseStudy from "../../components/FullCaseStudy";
import Header from "../../components/Header";
import Contact from "../../components/Contact";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";
import Image from "next/image";

const caseStudies = [
  {
    slug: 1,
    site_url: "https://seventhbear.com/",
    title: "TCA (Now Seventh Bear) - Landing Page Redesign",
    description:
      "I took a proactive approach to redesigning TCA’s (now Seventh Bear) landing page, identifying opportunities to improve its visual appeal, messaging, and conversion potential. After refining the design, I reached out with my proposal. They instantly loved it, recognizing the value of a fresh, optimized page that aligned with their brand goals.",
    sections: [
      {
        headline: "Strategy & Design Process",
        description: `
        <p>The original landing page lacked a clear hierarchy and engaging flow, making it challenging for visitors to grasp TCA’s offerings quickly. I conducted a competitive analysis to identify best practices and areas for improvement. My goal was to create a seamless user journey that ensured visitors could instantly understand the brand’s value proposition and take action.</p>
        <br/>
        Key improvements included: <br/><br/>
        <ul style="list-style-type: disc; margin-left: 24px">
          <li><strong>Stronger messaging clarity </strong>– Refined copy to emphasize the brand’s core mission and services.</li>
          <br/>
          <li><strong>Improved navigation </strong>– Simplified the layout for a frictionless browsing experience.</li>
          <br/>
          <li><strong>Better visual hierarchy </strong>– Designed a modern, high-converting interface that guides users effortlessly.</li>
        </ul>
        `,
        image: "/TCAs Home Page.png",
      },
      {
        headline: "Elevating Brand Presence",
        description: `
        <p>To make the landing page more engaging, I introduced:</p>
        <ul>
          <li>A bold, modern aesthetic that reflects Seventh Bear’s identity.</li>
          <br/>
          <li>Custom typography and color refinements for consistency and readability.</li>
          <br/>
          <li>Stronger CTAs to drive user engagement and conversions.</li>
        </ul>`,
      },
      {
        headline: "A Systematic, Scalable Approach",
        description: `
        <p>The new landing page was built with scalability in mind, ensuring:</p>
        <ul style="list-style-type: disc; margin-left: 24px">
          <li>Reusable design components that maintain consistency across the site.</li>
          <br/>
          <li>Responsiveness across all devices, offering a seamless experience for desktop and mobile users.</li>
        </ul>
        <p>Future-proofing for growth, allowing easy content updates and feature additions.</p>
        `,
      },
      {
        headline: "The CEO Words",
        description: `
        <p style="font-style: italic;">"Umar's proactive approach and keen eye for detail truly impressed us. 
        His proposal to enhance our online presence resonated with our vision, and his insights into optimizing user experience were invaluable. 
        Both Cathy and I were particularly drawn to the idea of transitioning to a sleek, one-page website, similar to the concept Umar presented. 
        Umar's professionalism and dedication to understanding our needs have made this process seamless."</p>
        <strong>— Robert Rose, The Content Marketing Advisory</strong>
        `,
      },
      {
        headline: "Impact",
        description: `
        <p>The redesigned page not only enhanced the brand’s digital presence but also positioned Seventh Bear as a more compelling, high-value brand. Their immediate positive reaction validated the approach, reinforcing the power of proactive design thinking.</p>
        `,
      }
    ],
  },
  {
    slug: 2,
    site_url: "https://mailafiyaumarsulai.wixstudio.com/-childcare",
    title: "Child Care Landing Page – Winning Wix Studio Challenge Entry",
    description:
      "This project was a demo landing page for a child care center, created as part of a monthly web design challenge hosted by Kyle Prinsloo and sponsored by Wix Studio. The goal was to design a warm, engaging, and user-friendly landing page that effectively communicates trust, care, and professionalism.",
    sections: [
      {
        headline: "Strategy & Design Process",
        description: `
        <p>Designing for a child care center required a delicate balance between professionalism and warmth.</p>
        <br/>
        I focused on: <br/><br/>
        <ul style="list-style-type: disc; margin-left: 24px">
          <li><strong>Soft, inviting colors</strong> to create a nurturing atmosphere.</li>
          <br/>
          <li><strong>Clear, readable typography</strong> for easy navigation.</li>
          <br/>
          <li><strong>A well-structured layout</strong> guiding parents effortlessly through services and trust signals.</li>
        </ul>
        `,
        image: "/childscare.png",
      },
      {
        headline: "Key Features",
        description: `<p>To make the landing page more engaging, I introduced:</p>
          <br/>
          <ul style="list-style-type: disc; margin-left: 24px">
            <li><strong>Emotional storytelling</strong>– Content that reassures parents about the center’s care quality.</li>
            <br/>
            <li><strong>Engaging visuals</strong>– Friendly imagery reinforcing a safe, welcoming environment.</li>
            <br/>
            <li><strong>Conversion-focused</strong>– Encouraging sign-ups and inquiries with a seamless UX.</li>
          </ul>`,
      },
      {
        headline: "The Winning Edge",
        description: `
        <p>The landing page stood out in the competition, securing first place for that month. The success reaffirmed my ability to blend strategic UX, engaging design, and business impact in web projects.</p>
        `,
      },
    ],
  },
  {
    slug: 3,
    site_url: "https://mailafiyaumarsulai.wixstudio.io/pixelforge",
    title: "Pixel Forge – Branding Agency Landing Page",
    description:
      "Pixel Forge was a Wix demo project created for a monthly web design challenge, showcasing a sleek, high-impact landing page for a branding agency. The goal was to design a page that effectively communicates brand strategy, creativity, and business growth.",
    sections: [
      {
        headline: "Strategy & Design Process",
        description: `
        <p>A branding agency needs a polished, visually striking online presence. 
        <br/> 
        I focused on:</p>
        <br/>
        <ul style="list-style-type: disc; margin-left: 24px">
          <li><strong>Minimalist yet bold aesthetics</strong>– A clean layout with striking typography and visuals.</li>
          <br/>
          <li><strong>Clear messaging hierarchy</strong> – Ensuring visitors instantly grasp the agency’s value.</li>
          <br/>
          <li><strong>Seamless navigation</strong>– Smooth user flow from introduction to services and contact.</li>
        </ul>
        `,
        image: "/Pixelforge.png",
      },
      {
        headline: "Key Features",
        description:
          `
          <ul style="list-style-type: disc; margin-left: 24px">
            <li><strong>Strong hero section</strong> with an impactful headline and CTA.</li>
            <br/>
            <li><strong>Service breakdown</strong> highlighting key branding solutions.</li>
            <br/>
            <li><strong>Mobile-first responsive design</strong> for a seamless experience across devices.</li>
          </ul>
          `,
      },
      {
        headline: "The Winning Edge",
        description: "This project was more than just a demo—it was a proof of concept that a well-structured, conversion-driven landing page can elevate any branding agency’s online presence.",
      },
    ],
  },
  {
    slug: 4,
    site_url: "https://mailafiyaumarsulai.wixstudio.com/rsguttering",
    title: "RS Guttering Landing Page Redesign",
    description:
      "RS Guttering, a roofing and guttering business, needed a modern, high-converting landing page to better showcase their services and attract more clients. Their existing website lacked a clear structure, engaging visuals, and strong calls to action. I took on the redesign to improve usability, branding, and lead generation.",
    sections: [
      {
        headline: "Strategy & Design Process",
        description: `
        <p>The original page had cluttered navigation, outdated design, and weak messaging. My approach focused on:</p>
        <br/>
        <ul style="list-style-type: disc; margin-left: 24px">
            <li><strong>Simplifying the user journey</strong> – Ensuring visitors could quickly find key services and contact information.</li>
            <br/>
            <li><strong>Enhancing visual appeal</strong> – Using modern layouts, high-quality images, and a professional color scheme.</li>
            <br/>
            <li><strong>Strengthening trust signals</strong> – Featuring testimonials, certifications, and case studies to build credibility.</li>
        </ul>
        `,
        image: "/RS-Guttering.png",
      },
      {
        headline: "Key Features",
        description:
          `
          <ul style="list-style-type: disc; margin-left: 24px">
            <li><strong>A clean, structured layout</strong> with clear service sections.</li>
            <br/>
            <li><strong>Bold CTAs</strong> driving inquiries and quote requests.</li>
            <br/>
            <li><strong>SEO optimization</strong> to improve discoverability.</li>
          </ul>
          `,
      },
      {
        headline: "Results",
        description: "The redesign transformed RS Guttering’s digital presence, making it easier for potential customers to understand their services and take action. The new landing page aligned with their brand vision while improving conversion rates and user engagement.",
      },
    ],
  },
  {
    slug: 5,
    site_url: "/",
    title: "Caleb’s Landing Page Redesign – A Brand-Aligned Concept",
    description:
      "This was a proposed redesign for Caleb’s landing page, crafted to better align with his brand identity while enhancing clarity, aesthetics, and user experience. The goal was to create a sleek, professional, and conversion-focused design that reflects his unique vision.",
    sections: [
      {
        headline: "Strategy & Design Process",
        description:  `
        <p>The original design lacked a cohesive brand feel, so I focused on:</p>
        <br/>
        <ul style="list-style-type: disc; margin-left: 24px">
            <li><strong>Brand consistency</strong> – Ensuring typography, colors, and layout matched Caleb’s identity.</li>
            <br/>
            <li><strong>Clear messaging</strong> – Refining the content structure for better readability and impact.</li>
            <br/>
            <li><strong>Improved user flow</strong> – Making it easier for visitors to understand his offer and take action.</li>
        </ul>
        `,
        image: "/Caleb-hero-redesign.png",
      },
      {
        headline: "Key Features",
        description:
          `
          <ul style="list-style-type: disc; margin-left: 24px">
            <li><strong>A bold, modern hero section</strong> that instantly captures attention.</li>
            <br/>
            <li><strong>Structured service breakdown</strong> to highlight key offerings.</li>
            <br/>
            <li><strong>Stronger CTAs</strong> designed to drive engagement and conversions.</li>
            <br/>
            <li><strong>Responsive design</strong> for seamless performance across devices.</li>
          </ul>
          `,
      },
      {
        headline: "Impact",
        description: "Though this was a proposed redesign, it demonstrated how strategic design can elevate a brand’s digital presence, ensuring a more engaging and high-converting experience.",
      },
    ],
  },
  {
    slug: 6,
    site_url: "/",
    title: "The Consistent Cash Flow – Product Landing Page for Kat Irwin",
    description:
      "I had the opportunity to design a high-converting landing page for Kat Irwin’s digital product, The Consistent Cash Flow. The goal was to create a page that not only reflects her brand but also drives engagement and sales through clear messaging, compelling visuals, and strategic design.",
    sections: [
      {
        headline: "Strategy & Design Process",
        description:  `
        <p>A product landing page needs to be persuasive and conversion-focused, so I focused on:</p>
        <br/>
        <ul style="list-style-type: disc; margin-left: 24px">
            <li><strong>Brand consistency</strong> – Ensuring the design aligns with Kat’s visual identity.</li>
            <br/>
            <li><strong>Engaging content structure</strong> – Organizing key information for easy readability.</li>
            <br/>
            <li><strong>Conversion optimization</strong> – Placing CTAs strategically to encourage action.</li>
        </ul>
        `,
        image: "/The Consistent Cash Flow Toolkit Landing Page.png",
      },
      {
        headline: "Key Features",
        description:
          `
          <ul style="list-style-type: disc; margin-left: 24px">
            <li><strong>Strong hero section</strong> with a clear value proposition.</li>
            <br/>
            <li><strong>Compelling product breakdown</strong> to highlight key benefits.</li>
            <br/>
            <li><strong>Social proof elements</strong> (testimonials, credibility markers) to build trust.</li>
            <br/>
            <li><strong>Mobile-optimized design</strong> for a seamless user experience.</li>
          </ul>
          `,
      },
      {
        headline: "Kat’s Words",
        description: `
        <p style="font-style: italic;">"Umar helped me with the design of a landing page for a digital product, and I couldn't be happier with the results. From the initial concept to the final design, he showed incredible attention to detail and was able to creatively incorporate my brand."</p>
        `,
      },
      {
        headline: "Impact",
        description: "The final design positioned The Consistent Cash Flow for success, providing a seamless experience that encourages conversions while staying true to Kat’s brand.",
      },
    ],
  },
  // Add other case studies here
];

export default async function Page({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find(
    (study) => study.slug === Number(params.slug)
  );

  if (!caseStudy) {
    return (
      <>
      <div className="text-gray-950 flex flex-col justify-center items-center h-screen">
        <p className="text-5xl font-extrabold w-full text-center">
        Case study not found
        </p>
        <br/>
        <Link href="/" className="text-2xl font-medium capitalize underline">go back to home page</Link>
      </div>
      
      </>
    );
  }

  const navigationButtonStyles: React.CSSProperties = {
      position: "absolute",
      top: "35%",
      right: "10%",
  }

  return (
    <>
      <Link href={`/case-studies/${caseStudy.slug+1}`}>
        <span style={navigationButtonStyles} className="text-sm text-gray-950 font-light capitalize hover:bg-[#CCF8FF]">next Case study <Image src="/solar_arrow-left-outline.png" alt="arrow" width={8} height={8} className="inline-block w-4 h-auto"/></span>
      </Link>
      <Header />
      <FullCaseStudy {...caseStudy} />
      {/* <Contact /> */}
      <FAQ />
      <Footer />
    </>
  );
}
