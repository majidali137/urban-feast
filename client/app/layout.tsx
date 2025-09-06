import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Navbar } from "@/components/Shared/Navbar";
import { Footer } from "@/components/Shared/Footer";
import { AuthProvider } from "@/hooks/use-auth";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urban Feast - Premium Dining Experience",
  description:
    "Experience culinary excellence at Urban Feast. Book your table for an unforgettable dining experience.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <main className="min-h-screen pt-16">{children}</main>
            <Footer />
          </Suspense>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
