// app/layout.tsx
import "./globals.css";
import localFont from "next/font/local";
import ClientRouter from "./components/ClientRouter";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import EthereumFix from "./components/EthereumFix";
import ClarityTracker from "./components/ClarityTracker";
import Script from 'next/script';

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

export const metadata = {
  title: "Farouqk Designs - Web design & Marketing Agency",
  description: "Crafting Designs That Speak & Words That Sell.",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        href: '/favicon.ico',
      },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      {
        url: '/favicon.ico',
        sizes: '180x180',
        type: 'image/ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S48SW6XPQV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S48SW6XPQV');
          `}
        </Script>
        {/* Clarity script tag */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+"${"qdls91amcl"}";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${"qdls91amcl"}");
            `,
          }}
        />
      </head>
      <body className={`${NeueMachina.className} min-h-screen px-5 md:px-12`}>
        <EthereumFix />
        <SpeedInsights />
        <Analytics />
        <ClarityTracker />
        <ClientRouter>
          <main className="main max-w-screen-xl mx-auto my-5 lg:my-6 border border-gray-400">
            {children}
          </main>
        </ClientRouter>
      </body>
    </html>
  );
}