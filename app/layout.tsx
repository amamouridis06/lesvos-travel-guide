import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Lesvos Travel & Culture Website",
  description: "Discover the natural beauty, history, and culture of Lesvos through a modern, custom-built travel website.",
  keywords: ["Lesvos", "Travel", "Guide", "Culture", "Greece", "Beaches", "Villages"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Lesvos Travel & Culture Website",
    description: "Explore the most beautiful places in Lesvos — beaches, villages, culture, and nature.",
    url: "lesvos-travel-guide-five.vercel.app",
    siteName: "Lesvos Travel",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Lesvos Travel Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};



export default function RootLayout({children, }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className={inter.className}>
      <NavBar />
      <div className="pt-20">{children}</div>
      </body>
      </html>
  );
}