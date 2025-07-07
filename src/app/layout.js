import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Talha Jabbar  | Portfolio",
  keywords: [
    "Talha Jabbar ",
    "Portfolio",
    "Mobile App Developer",
    "React Native Expert", 
     "Full Stack Developer", 
     "Frontend Specialist", 
     "Cross-Platform Developer", 
     "Problem Solver"
  ],
  authors: [{ name: "Talha Jabbar ", url: "https://github.com  /Talha5t5" }],
  creator: "Talha Jabbar ",
  openGraph: {
    title: "Talha Jabbar | Portfolio",
    description:
      "Full Stack Developer specializing in Next.js, TypeScript, MongoDB, and AWS cloud services.",
    url: "https://portfolio-react-two.vercel.app/",
    siteName: "Talha Jabbar Portfolio",
    images: [
      {
        url: "https://portfolio-react-two.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Talha Jabbar  Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  description: "Generated in next by Talha Jabbar ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
