import Footer from "@/components/sections/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/sections/Header";
import { Metadata } from "next";
import { ThemeProvider } from "./theme-provider";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from '@vercel/analytics/react';

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
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          {/* <SpeedInsights />
        <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
