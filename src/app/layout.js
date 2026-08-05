import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Abdul Hadi | Portfolio",
  keywords: [
    "Abdul Hadi",
    "Portfolio",
    "MERN Stack Developer",
    "AI Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Generative AI",
    "RAG Pipelines",
    "Node.js Developer"
  ],
  authors: [{ name: "Abdul Hadi", url: "https://github.com/Abdulhaadi123" }],
  creator: "Abdul Hadi",
  openGraph: {
    title: "Abdul Hadi | Portfolio",
    description:
      "MERN Stack Developer & AI Engineer specializing in React, Next.js, Node.js, MongoDB, and Generative AI systems including RAG pipelines, AI Agents, and Speech AI integrations.",
    url: "https://portfolio-react-two.vercel.app/",
    siteName: "Abdul Hadi Portfolio",
    images: [
      {
        url: "https://portfolio-react-two.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abdul Hadi Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  description: "Abdul Hadi — MERN Stack Developer & AI Engineer building scalable web apps and production-level Generative AI systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Toaster position="top-right" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
