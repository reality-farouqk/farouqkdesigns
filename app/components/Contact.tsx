"use client";
import React, { useState } from "react";
import ScrollRevealWrapper from "./ScrollRevealWrapper";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(""); // State for error message
  const [website, setWebsite] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(""); // Reset error message

    const formData = {
      name,
      email,
      message,
      website,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (error) {
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
              Send Us a Message
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
                placeholder="Project Scope Brief. e.g... We want a simple website that has..."
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
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
