import React from "react";
import CTA from "./CTA";
import ScrollRevealWrapper from './ScrollRevealWrapper';

export default function VideoTestimonial() {
  return (
    <section
      style={{
        backgroundColor: "#42AFC0",
        padding: "100px 50px",
        textAlign: "center",
      }}
      className="video-testimonial-section"
    >
      <style>
        {`
          @media (max-width: 600px) {
            .video-testimonial-section {
              padding: 60px 20px !important;
            }
          }
        `}
      </style>
      <div>
        <ScrollRevealWrapper delay={0} origin="top" distance="20px" duration={800}>
          <div
            style={{
              color: "#f1f1f1",
              fontSize: "clamp(12px, 2vw, 16px)",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginBottom: "16px",
              letterSpacing: "1px",
              lineHeight: 1.3,
            }}
          >
            Your Search for a trusted designer ends here
          </div>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper delay={200} origin="top" distance="20px" duration={800}>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(28px, 6vw, 48px)",
              margin: "0 0 32px 0",
              fontWeight: "700",
              textTransform: "capitalize",
              lineHeight: 1.15,
              letterSpacing: "-1px",
            }}
          >
            A professional for a reason
          </h1>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper delay={400} origin="bottom" distance="20px" duration={800}>
          <div style={{ maxWidth: "360px", margin: "0 auto" }}>
            <video
              autoPlay
              controls
              width="100%"
              style={{ borderRadius: "12px", boxShadow: "0 4px 24px rgba(0,0,0,0.15)" }}
            >
              <source src="/Ronen Pessar's Testimonial.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </ScrollRevealWrapper>
        <div style={{marginTop: "20px"}}>
          <ScrollRevealWrapper delay={800} origin="bottom" distance="20px" duration={1000}>
            <CTA />
            <p className="text-sm font-semibold mt-2">Simple Pricing. Clear Deliverables. Full Site Ownership</p>
          </ScrollRevealWrapper>
        </div>
      </div>
    </section>
  );
}