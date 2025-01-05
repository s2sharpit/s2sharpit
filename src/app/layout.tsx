import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { MouseEffect } from "@/components/ui/mouse-effect";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://s2sharpit.tech"),
  title: {
    default: "Tushar Saini",
    template: "%s | Tushar Saini",
  },
  description: "Software Engineer",
  keywords: [
    "s2sharpit",
    "Tushar",
    "Saini",
    "TusharSaini",
    "Tushars2sharpit",
    "sainis2sharpit",
    "portfolio",
    "bharat",
  ],
  openGraph: {
    title: "Tushar Saini",
    description: "Software Engineer",
    url: "https://s2sharpit.tech",
    siteName: "Tushar Saini",
    images: [
      {
        url: "https://s2sharpit.tech/s2sharpit.png",
        width: 1080,
        height: 1080,
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Tushar Saini",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900`}
      >
        <MouseEffect
          gradientColor={"#1d4ed8"}
          gradientOpacity={0.1}
          gradientSize={500}
          className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0"
        >
          <Header />
          {children}
          {/* <Footer /> */}
          <SpeedInsights />
          <Analytics />
        </MouseEffect>
      </body>
    </html>
  );
}
