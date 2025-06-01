"use client";
import React from "react";
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { usePathname } from "next/navigation";
import { metadata } from "./metadata"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow py-20">{children}</main>
        {pathname === "/login" || pathname === "/signup" ? "" : <Footer />}
      </body>
    </html>
  );
}
