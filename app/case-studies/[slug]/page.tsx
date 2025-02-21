import React from "react";
import FullCaseStudy from "../../components/FullCaseStudy";
import Header from "../../components/Header";
import Contact from "../../components/Contact";
import FAQ from "../../components/FAQ";
import Footer from "../../components/Footer";

const caseStudies = [
  {
    slug: 1,
    site_url: "https://seventhbear.com/",
    title: "TCA (Now Seventh Bear) - Landing Page Redesign",
    description:
      "I took a proactive approach to redesigning TCA’s (now Seventh Bear) landing page, identifying opportunities to improve its visual appeal, messaging, and conversion potential. After refining the design, I reached out with my proposal. They instantly loved it, recognizing the value of a fresh, optimized page that aligned with their brand goals.",
    sections: [
      {
        headline: "Strategy & UX",
        description: `<p>The original landing page lacked a clear hierarchy and engaging flow, making it challenging for visitors to grasp TCA’s offerings quickly. I conducted a competitive analysis to identify best practices and areas for improvement. My goal was to create a seamless user journey that ensured visitors could instantly understand the brand’s value proposition and take action.</p>
<br/>
        Key improvements included: <br/><br/>
<ul style="list-style-type: disc; margin-left: 24px">
<li><strong>Stronger messaging clarity </strong>– Refined copy to emphasize the brand’s core mission and services.</li>
<br/>
<li><strong>Improved navigation </strong>– Simplified the layout for a frictionless browsing experience.</li>
<br/>
<li><strong>Better visual hierarchy </strong>– Designed a modern, high-converting interface that guides users effortlessly.</li>
</ul>`,
        image: "/TCAs Home Page.png",
      },
      {
        headline: "Elevating Brand Presence",
        description:
          `<p>To make the landing page more engaging, I introduced:</p>
          <ul>
          <li>
A bold, modern aesthetic that reflects Seventh Bear’s identity.</li>
          <li>
Custom typography and color refinements for consistency and readability.</li>
          <li>
Stronger CTAs to drive user engagement and conversions.</li>
          </ul>`,
      },
      {
        headline: "A Systematic, Scalable Approach",
        description: `<p>The new landing page was built with scalability in mind, ensuring:</p>
<ul style="list-style-type: disc; margin-left: 24px">
        <li>
        Reusable design components that maintain consistency across the site.</li>
        <li>
Responsiveness across all devices, offering a seamless experience for desktop and mobile users.</li>
        <ul/>
        <p>Future-proofing for growth, allowing easy content updates and feature additions.</p>
        `,
      },
      {
        headline: "The CEO Words",
        description: `<p style="font-style: italic;">"Umar's proactive approach and keen eye for detail truly impressed us. 
        His proposal to enhance our online presence resonated with our vision, and his insights into optimizing user experience were invaluable.  
        Both Cathy and I were particularly drawn to the idea of transitioning to a sleek, one-page website, similar to the concept Umar presented.  
        Umar's professionalism and dedication to understanding our needs have made this process seamless."</p>
        <strong style="font-style: italic;"> — Robert Rose, The Content Marketing Advisory</strong>`,
      },
    ],
  },
  {
    slug: 2,
    site_url: "",
    title: "TCA(Now seventh bear)",
    description:
      "Redesigned their landing page proactively, reached out, and they instantly loved it—turning a bold move into a real impact",
    sections: [
      {
        headline: "Project Overview",
        description: "A detailed overview of the project and its objectives.",
      },
      {
        headline: "Design Process",
        description:
          "An insight into the design process and the decisions made.",
        image: "/TCAs Home Page.png",
      },
      {
        headline: "Results",
        description: "The outcomes and impact of the redesign.",
      },
      {
        headline: "Client Feedback",
        description: "Feedback from the client on the final product.",
      },
    ],
  },
  {
    slug: 3,
    site_url: "",
    title: "TCA(Now seventh bear)",
    description:
      "Redesigned their landing page proactively, reached out, and they instantly loved it—turning a bold move into a real impact",
    sections: [
      {
        headline: "Project Overview",
        description: "A detailed overview of the project and its objectives.",
      },
      {
        headline: "Design Process",
        description:
          "An insight into the design process and the decisions made.",
        image: "/TCAs Home Page.png",
      },
      {
        headline: "Results",
        description: "The outcomes and impact of the redesign.",
      },
      {
        headline: "Client Feedback",
        description: "Feedback from the client on the final product.",
      },
    ],
  },
  {
    slug: 4,
    site_url: "",
    title: "TCA(Now seventh bear)",
    description:
      "Redesigned their landing page proactively, reached out, and they instantly loved it—turning a bold move into a real impact",
    sections: [
      {
        headline: "Project Overview",
        description: "A detailed overview of the project and its objectives.",
      },
      {
        headline: "Design Process",
        description:
          "An insight into the design process and the decisions made.",
        image: "/TCAs Home Page.png",
      },
      {
        headline: "Results",
        description: "The outcomes and impact of the redesign.",
      },
      {
        headline: "Client Feedback",
        description: "Feedback from the client on the final product.",
      },
    ],
  },
  {
    slug: 5,
    site_url: "",
    title: "TCA(Now seventh bear)",
    description:
      "Redesigned their landing page proactively, reached out, and they instantly loved it—turning a bold move into a real impact",
    sections: [
      {
        headline: "Project Overview",
        description: "A detailed overview of the project and its objectives.",
      },
      {
        headline: "Design Process",
        description:
          "An insight into the design process and the decisions made.",
        image: "/TCAs Home Page.png",
      },
      {
        headline: "Results",
        description: "The outcomes and impact of the redesign.",
      },
      {
        headline: "Client Feedback",
        description: "Feedback from the client on the final product.",
      },
    ],
  },
  {
    slug: 6,
    site_url: "",
    title: "TCA(Now seventh bear)",
    description:
      "Redesigned their landing page proactively, reached out, and they instantly loved it—turning a bold move into a real impact",
    sections: [
      {
        headline: "Project Overview",
        description: "A detailed overview of the project and its objectives.",
      },
      {
        headline: "Design Process",
        description:
          "An insight into the design process and the decisions made.",
        image: "/TCAs Home Page.png",
      },
      {
        headline: "Results",
        description: "The outcomes and impact of the redesign.",
      },
      {
        headline: "Client Feedback",
        description: "Feedback from the client on the final product.",
      },
    ],
  }
  // Add other case studies here
];

export default async function Page({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find(
    (study) => study.slug === Number(params.slug)
  );

  if (!caseStudy) {
    return (
      <p className="text-gray-950 text-5xl font-extrabold flex justify-center items-center w- h-screen">
        Case study not found
      </p>
    );
  }

  return (
    <>
      <Header />
      <FullCaseStudy {...caseStudy} />
      {/* <Contact /> */}
      <FAQ />
      <Footer />
    </>
  );
}
