// app/components/Contact.tsx
"use client";
import React, { useState } from "react";
import ScrollRevealWrapper from "./ScrollRevealWrapper";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // Honeypot field
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Client-side relevance check (matches server-side keywords)
  const isRelevantMessage = (message: string): boolean => {
    const keywords = [
      "web design", "branding", "logo", "ui", "ux", "website", "portfolio", "graphic", "design", "development", "farouqk", "umar",
      "marketing", "digital marketing", "content marketing", "seo", "search engine", "copywriting", "copywriter", "ad copy", "sales page",
      "landing page", "email campaign", "social media", "content strategy", "brand messaging", "storytelling", "conversion", "call to action",
      "newsletter", "blog post", "press release"
    ];
    const lowerMsg = message.toLowerCase();
    return keywords.some((kw) => lowerMsg.includes(kw));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    // Client-side validation
    if (!name || !email || !message) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format.");
      setLoading(false);
      return;
    }

    if (message.length < 100) {
      setError("Message must be at least 100 characters.");
      setLoading(false);
      return;
    }

    if (!isRelevantMessage(message)) {
      setError("Message must be relevant to our services (e.g., web design, marketing).");
      setLoading(false);
      return;
    }

    const formData = { name, email, message, website };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
        setWebsite("");
      } else {
        setError(result.error || "Failed to send message. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-cover bg-center p-8 bg-[#42AFC0] px-5 py-24 md:px-12"
    >
      <div className="text-center mb-8 max-w-[600px] mx-auto">
        <ScrollRevealWrapper delay={200} origin="top" distance="20px" duration={1000}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 capitalize">
            Get a world-class website and a constant roll in of clients
          </h1>
        </ScrollRevealWrapper>
        <ScrollRevealWrapper delay={400} origin="top" distance="20px" duration={1000}>
          <h2 className="text-base md:text-lg font-normal text-white capitalize">
            Let&apos;s Collaborate to bring your vision to life.
          </h2>
        </ScrollRevealWrapper>
      </div>

      <div className="flex justify-center">
        <form
          className="bg-white p-8 rounded shadow-lg w-full max-w-2xl"
          onSubmit={handleSubmit}
        >
          <ScrollRevealWrapper delay={500} origin="bottom" distance="20px" duration={1000}>
            <h3 className="text-[#2b2b2b] text-xl md:text-2xl font-bold mb-4 text-center">
              Send Me a Message
            </h3>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper delay={600} origin="bottom" distance="20px" duration={1000}>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="text-sm font-light shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper delay={700} origin="bottom" distance="20px" duration={1000}>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="text-sm font-light shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </ScrollRevealWrapper>

          <ScrollRevealWrapper delay={800} origin="bottom" distance="20px" duration={1000}>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="text-sm font-light shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                id="message"
                placeholder="Project Scope Brief. e.g., We want a simple website that has..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <p className="text-gray-500 text-xs mt-1">
                {message.length}/100 characters (minimum)
              </p>
            </div>
          </ScrollRevealWrapper>

          {/* Honeypot field */}
          <input
            type="text"
            name="website"
            style={{ display: "none" }}
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <ScrollRevealWrapper delay={900} origin="bottom" distance="20px" duration={1000}>
            <div className="flex justify-center">
              <button
                className={`bg-[#D41E00] hover:bg-[#550C00] text-white uppercase text-bold text-sm py-3 px-4 rounded focus:outline-none focus:shadow-outline ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Collaborate Now"}
              </button>
            </div>
          </ScrollRevealWrapper>

          {(success || error) && (
            <ScrollRevealWrapper delay={1000} origin="bottom" distance="20px" duration={1000}>
              {success && (
                <div className="text-md text-center mt-4 text-green-500 font-bold">
                  Message sent successfully!
                </div>
              )}
              {error && (
                <div className="text-md text-center mt-4 text-red-500 font-bold">
                  {error}
                </div>
              )}
            </ScrollRevealWrapper>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;