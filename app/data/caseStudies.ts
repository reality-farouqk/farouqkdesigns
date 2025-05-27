//app/data/caseStudies.ts
export interface CaseStudy {
  slug: number;
  site_url: string;
  title: string;
  description: string;
  sections: {
    headline: string;
    description: string;
    image?: string;
    video?: string; // <-- Add this
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 1,
    site_url: "https://mailafiyaumarsulai.wixstudio.com/nikkilang", // Update with the actual live site URL if different
    title: "Mindset in Sales – Website Redesign & Launch",
    description:
      "I partnered with Nikki Lang, The Mindful Seller, to craft a website that empowers B2B sellers, VPs, and founders to sell smarter and stress less. Taking a proactive and professional approach, I streamlined her online presence to reflect her human-first, mindset-driven mission. Nikki loved the result, praising the seamless process and impactful design, as evidenced by her recommendation: \"I recommend working with Umar.\"",
    sections: [
      {
        headline: "Strategy & Design Process",
        description: `
          <p>The original vision for Nikki’s website needed focus to align with her goal of transforming B2B sales through mindset and strategy. I analyzed her brand, audience, and goals to create a user-centric platform that drives engagement and conversions.</p>
          <br/>
          Key improvements included: <br/><br/>
          <ul style="list-style-type: disc; margin-left: 24px">
            <li><strong>Clearer Messaging</strong> – Refined copy to highlight Nikki’s mission of helping AEs, VPs, and founders crush quotas without burnout.</li>
            <br/>
            <li><strong>Simplified Navigation</strong> – Streamlined the menu (Home, About, For Sellers, For Teams, Contact) for a frictionless user journey.</li>
            <br/>
            <li><strong>Engaging Visuals</strong> – Designed a bold, authentic interface with mindset-driven content and strong CTAs (e.g., e-book download, contact form).</li>
          </ul>
        `,
        video: "/Nikki Lang - Mindset in sale website.mp4",
      },
      {
        headline: "Elevating Brand Presence",
        description: `
          <p>To make the website a true reflection of Nikki’s brand, I introduced:</p>
          <ul style="list-style-type: disc; margin-left: 24px">
            <li>A modern, human-first aesthetic that resonates with B2B sales professionals.</li>
            <br/>
            <li>Consistent typography and colors for readability and brand alignment.</li>
            <br/>
            <li>Two hero image buttons (“COACHING FOR REPS” and “TRAINING FOR TEAMS”) to guide users to key services.</li>
            <br/>
            <li>A lead-capturing contact form to streamline inquiries without overwhelming Nikki’s calendar.</li>
          </ul>
        `,
      },
      {
        headline: "A Systematic, Scalable Approach",
        description: `
          <p>The website was built for impact and growth, ensuring:</p>
          <ul style="list-style-type: disc; margin-left: 24px">
            <li><strong>Reusable Components</strong> – Modular design for consistent updates (e.g., text, images, links).</li>
            <br/>
            <li><strong>Full Responsiveness</strong> – Seamless experience across desktop and mobile devices.</li>
            <br/>
            <li><strong>Future-Proofing</strong> – Easy integration for newsletters, course launches, and lead magnets.</li>
          </ul>
          <p>I also configured the domain, set up SEO basics, and proposed a weekly newsletter using Nikki’s LinkedIn content to grow her email list—addressing her pain point of avoiding time-intensive tasks.</p>
        `,
      },
      {
        headline: "The Client’s Words",
        description: `
          <p style="font-style: italic;">"I recommend working with Umar."</p>
          <strong>— Nikki Lang, The Mindful Seller</strong>
          <p>Nikki’s endorsement reflects her satisfaction with my professional, detail-oriented approach and the website’s alignment with her vision of empowering sales professionals through mindset and strategy.</p>
        `,
      },
      {
        headline: "Impact",
        description: `
          <p>The redesigned Mindset in Sales website positions Nikki as a leading voice in B2B sales coaching. With a streamlined design, optimized CTAs, and a scalable foundation, it drives engagement, captures leads, and supports her upcoming course launch. Nikki’s immediate positive feedback and recommendation underscore the success of this collaborative, impactful project.</p>
        `,
      },
    ],
  },
  {
    slug: 2,
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
        video: "/TCA(Seventh Bear) website review.mp4",
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
        video: "/PixelForge Web design Preview.mp4",
      },
      {
        headline: "Key Features",
        description: `
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
        description:
          "This project was more than just a demo—it was a proof of concept that a well-structured, conversion-driven landing page can elevate any branding agency’s online presence.",
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
        video: "/RS Guttering services web design preview.mp4",
      },
      {
        headline: "Key Features",
        description: `
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
        description:
          "The redesign transformed RS Guttering’s digital presence, making it easier for potential customers to understand their services and take action. The new landing page aligned with their brand vision while improving conversion rates and user engagement.",
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
        description: `
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
        video: "/Caleb Raltson Demo Landing Page design.mp4",
      },
      {
        headline: "Key Features",
        description: `
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
        description:
          "Though this was a proposed redesign, it demonstrated how strategic design can elevate a brand’s digital presence, ensuring a more engaging and high-converting experience.",
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
        description: `
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
        video: "/Kat Irwin Website Preview.mp4",
      },
      {
        headline: "Key Features",
        description: `
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
        description:
          "The final design positioned The Consistent Cash Flow for success, providing a seamless experience that encourages conversions while staying true to Kat’s brand.",
      },
    ],
  },
  {
    slug: 7,
    site_url: "https://mailafiyaumarsulai.wixstudio.com/-childcare",
    title: "Child Care Landing Page – Winning Wix Studio Challenge Entry",
    description:
      "This project was a demo landing page for a child care center, created as part of a monthly web design challenge hosted by Kyle Prinsloo and sponsored by Wix Studio. The goal was to design a warm, engaging, and user-friendly landing page that effectively communicates trust, care, and professionalism.",
    sections: [
      {
        headline: "Strategy & Design Process",
        description: `
          <p>Designing for a child care center required a delicate balance between professionalism and warmth.</p>
          <ul style="list-style-type: disc; margin-left: 24px">
            <li>Soft, inviting colors to create a nurturing atmosphere.</li>
            <br/>
            <li>Clear, readable typography for easy navigation.</li>
            <br/>
            <li>A well-structured layout guiding parents effortlessly through services and trust signals.</li>
          </ul>
        `,
        video: "/Childcare winning wixstudio entry website design preview.mp4",
      },
      {
        headline: "Key Features",
        description: `
          <ul style="list-style-type: disc; margin-left: 24px">
            <li><strong>Emotional storytelling</strong> – Content that reassures parents about the center’s care quality.</li>
            <br/>
            <li><strong>Engaging visuals</strong> – Friendly imagery reinforcing a safe, welcoming environment.</li>
            <br/>
            <li><strong>Conversion-focused</strong> – Encouraging sign-ups and inquiries with a seamless UX.</li>
          </ul>
        `,
      },
      {
        headline: "The Winning Edge",
        description: `
          <p>The landing page stood out in the competition, securing first place for that month. The success reaffirmed my ability to blend strategic UX, engaging design, and business impact in web projects.</p>
        `,
      },
    ],
  },
  // Add other case studies here
];
