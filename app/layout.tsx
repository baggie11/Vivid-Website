import type { Metadata } from "next";
import { Inter, Oswald, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "VIVID 10.0 - National Level Project Competition | SSN College",
  description: "VIVID 10.0: Premier national-level project competition organized by Department of IT, SSN College of Engineering. Showcase innovation in IoT, AI/ML, Blockchain, Data Analytics, and Cybersecurity.",
  keywords: "VIVID, project competition, national level, SSN College, IT competition, innovation",
  openGraph: {
    title: "VIVID 10.0 - National Level Project Competition",
    description: "Premier project competition by SSN College of Engineering. March 26-27, 2026.",
    url: "https://vivid.ssn.edu.in",
    siteName: "VIVID 10.0",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIVID 10.0 - National Level Project Competition",
    description: "National-level project competition by SSN College of Engineering",
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
        className={`${inter.variable} ${oswald.variable} ${bebasNeue.variable} antialiased bg-white text-gray-900`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
