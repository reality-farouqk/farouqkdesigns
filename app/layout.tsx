import "./globals.css";
import localFont from "next/font/local";
import ClientRouter from "./components/ClientRouter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"
import Clarity from '@microsoft/clarity';

const NeueMachina = localFont({
  src: [
    {
      path: "../public/fonts/PPNeueMachina-InktrapLight.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/fonts/PPNeueMachina-InktrapRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPNeueMachina-InktrapUltrabold.otf",
      weight: "600",
      style: "Ultrabold",
    },
  ],
});

const projectId = "qdls91amcl"

Clarity.init(projectId);
Clarity.consent();

export const metadata = {
  title: "Farouqk Designs - Web design & Copywriting Agency",
  description: "Crafting Designs That Speak & Words That Sell.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${NeueMachina.className} min-h-screen px-5 md:px-12`}>
        <SpeedInsights />
        <Analytics/>
        <ClientRouter>
          <main className="main max-w-screen-xl mx-auto my-5 lg:my-6 border border-gray-400">{children}</main>
        </ClientRouter>
      </body>
    </html>
  );
}
