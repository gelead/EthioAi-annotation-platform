import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EthioAI • Precision Data Labeling",
  description:
    "EthioAI helps businesses and national institutions create accurate AI models faster with high-quality labeled data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-slate-50`}
      >
        <div className="min-h-screen bg-[#0a0a0a]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
