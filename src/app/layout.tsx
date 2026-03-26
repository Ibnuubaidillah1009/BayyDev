import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ibnu Ubaidillah | Software Engineering Student",
  description: "I'm Ibnu Ubaidillah, an 11th-grade Software Engineering (PPLG) student at SMKN 1 Bangil. Explore my modern web portfolio, projects, skills, and certificates.",
  keywords: ["Ibnu Ubaidillah", "Frontend Developer", "Web Designer", "Software Engineering Student", "Next.js", "React", "SMKN 1 Bangil"],
  openGraph: {
    title: "Ibnu Ubaidillah | Software Engineer Student",
    description: "I'm Ibnu Ubaidillah, passionate about writing clean code and building intuitive user interfaces.",
    url: "https://ibnuubaidillah.com",
    siteName: "Ibnu Ubaidillah Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibnu Ubaidillah | Software Engineer Student",
    description: "Explore my modern web portfolio, projects, skills, and certificates.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col selection:bg-violet-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
