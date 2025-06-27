//app/api/contact/route.ts
//this file handles the contact form submission, validates input, and sends an email using nodemailer.
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Helper to check if message is relevant to your services
function isRelevantMessage(message: string): boolean {
  const keywords = [
    // Design & development
    "web design", "branding", "logo", "ui", "ux", "website", "portfolio", "graphic", "design", "development", "farouqk", "umar",
    // Marketing & copywriting
    "marketing", "digital marketing", "content marketing", "seo", "search engine", "copywriting", "copywriter", "ad copy", "sales page", "landing page", "email campaign", "social media", "content strategy", "brand messaging", "storytelling", "conversion", "call to action", "newsletter", "blog post", "press release"
  ];
  const lowerMsg = message.toLowerCase();
  return keywords.some((kw) => lowerMsg.includes(kw));
}

export async function POST(req: Request) {
  try {
    const { name, email, message, website } = await req.json();

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Honeypot check
    if (website) {
      return NextResponse.json(
        { error: "Spam detected!" },
        { status: 400 }
      );
    }

    // Required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Message length and relevance validation
    if (message.length < 100 || !isRelevantMessage(message)) {
      return NextResponse.json(
        { error: "Message must be at least 100 characters and relevant to our services." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      replyTo: email,
      to: "umar@farouqkdesigns.com",
      subject: `New website message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error sending email" },
      { status: 500 }
    );
  }
}