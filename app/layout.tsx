import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joe's Hardware - Internal Catalogue",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-50 scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1750px] mx-auto`}
      >
        <Header />


        {children}
      </body>
    </html>
  );
}
