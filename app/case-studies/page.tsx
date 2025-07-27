"use client";
import "../globals.css";
import Header from "../components/Header";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import ScrollRevealWrapper from "../components/ScrollRevealWrapper";

const caseStudies = [
	{
		id: 1,
		title: "Mindset in Sales",
		image: "/Nikki Lang - Mindset In Sales.png",
		description:
			"Crafted a mindset-driven website for Nikki Lang, The Mindful Seller, to empower B2B sellers with a bold, human-first platform.",
	},
	{
		id: 2,
		title: "TCA(Now seventh bear)",
		image: "/TCAs Home Page.png",
		description:
			"Redesigned their landing page proactively, reached out, and they instantly loved it—turning a bold move into a real impact",
	},
  	{
		id: 3,
		title: "Outbound Operators",
		image: "/Outbound Operators Landing Page.png", // Update image path if needed
		description:
			"Collaborated with Ronen Pessar of Outbound Operators to build a website that boosts outbound sales with precision.",
	},
	{
		id: 4,
		title: "RS Guttering",
		image: "/RS-Guttering.png",
		description:
			"Revamped a roofing business landing page—giving it a fresh, modern look that aligns with their brand and goals.",
	},
	{
		id: 5,
		title: "Caleb's Redesign",
		image: "/Caleb-hero-redesign.png",
		description:
			"A sleek redesign to refine Caleb’s landing page—crafted to enhance clarity, aesthetics, and user experience.",
	},
	{
		id: 6,
		title: "The Consistent Cash Flow",
		image: "/The Consistent Cash Flow Toolkit Landing Page.png",
		description:
			"Designed a high-converting product landing page for my mentor, Kat Irwin, to drive engagement and sales.",
	},
    // {
  //   id: 7,
  //   title: "Child Care",
  //   image: "/childscare.png",
  //   description:
  //     "Designed a warm, inviting Wix demo for a child care center—showcasing a nurturing space for infants and children.",
  // },
    // 	{
	// 	id: 8,
	// 	title: "Pixel Forge",
	// 	image: "/Pixelforge.png",
	// 	description:
	// 		"A Wix demo showcasing a sleek branding agency landing page—crafted to highlight how businesses can elevate their identity.",
	// },
];

export default function Home() {
	return (
		<>
			<div className="bg-white text-[#2b2b2b] container mx-auto px-5 py-24">
				<div className="mb-10">
					<ScrollRevealWrapper
						delay={200}
						origin="left"
						distance="30px"
						duration={1000}
					>
						<h1 className="text-3xl lg:text-5xl font-bold">Case Studies</h1>
					</ScrollRevealWrapper>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{caseStudies.map((caseStudy, index) => (
						<div
							key={caseStudy.id}
							className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
						>
							<ScrollRevealWrapper
								delay={300 + index * 100}
								origin="bottom"
								distance="30px"
								duration={1000}
							>
								<Image
									src={caseStudy.image}
									alt={caseStudy.title}
									width={250}
									height={250}
									className="w-full h-auto"
								/>
							</ScrollRevealWrapper>

							<ScrollRevealWrapper
								delay={400 + index * 100}
								origin="bottom"
								distance="30px"
								duration={1000}
							>
								<h2 className="text-2xl font-semibold my-3 lg:my-5">
									{caseStudy.title}
								</h2>
							</ScrollRevealWrapper>

							<ScrollRevealWrapper
								delay={500 + index * 100}
								origin="bottom"
								distance="30px"
								duration={1000}
							>
								<p className="text-base font-light mb-4">
									{caseStudy.description}
								</p>
							</ScrollRevealWrapper>

							<ScrollRevealWrapper
								delay={600 + index * 100}
								origin="bottom"
								distance="30px"
								duration={1000}
							>
								<Link href={`/case-studies/${caseStudy.id}`}>
									<span className="text-[#0092AA] hover:underline">
										Read More
									</span>
								</Link>
							</ScrollRevealWrapper>
						</div>
					))}
				</div>
			</div>

			<Contact />
			<FAQ />
		</>
	);
}
