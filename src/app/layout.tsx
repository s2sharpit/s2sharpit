import "./globals.css";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://s2sharpit.dev"),
  title: {
    default: "Tushar Saini",
    template: "%s | Tushar Saini",
  },
  description:
    "Software Engineer building AI-augmented, full-stack systems — Angular, Spring Boot, Next.js, FastAPI.",
  keywords: [
    "s2sharpit",
    "Tushar",
    "Saini",
    "portfolio",
    "bharat",
    "angular",
    "spring-boot",
    "fastapi",
    "ai-engineer",
    "full-stack",
  ],
  openGraph: {
    title: "Tushar Saini",
    description:
      "Software Engineer building AI-augmented, full-stack systems — Angular, Spring Boot, Next.js, FastAPI.",
    url: "https://s2sharpit.dev",
    siteName: "Tushar Saini",
    images: [
      {
        url: "https://s2sharpit.dev/s2sharpit.png",
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
    description:
      "Software Engineer building AI-augmented, full-stack systems — Angular, Spring Boot, Next.js, FastAPI.",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-sans bg-background text-foreground antialiased selection:bg-accent/20 selection:text-accent transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
