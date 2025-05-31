import React from "react";
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";

export const metadata = {
  title: "My Ecommerce Store",
  description: "Buy awesome products here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow py-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}