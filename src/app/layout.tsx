import type { Metadata } from "next";
import { Inter, Urbanist, Geist } from "next/font/google";
import "./globals.css";
import { ConditionalNavigation } from "@/components/layout/ConditionalNavigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EthioAI - Sovereign Data Annotation",
  description: "National data annotation platform for Ethiopian AI systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${urbanist.variable} ${geist.variable} antialiased bg-[#050505] text-white`}
      >
        <ConditionalNavigation>{children}</ConditionalNavigation>
      </body>
    </html>
  );
}
