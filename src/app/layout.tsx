"use client";
import React from "react";
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { usePathname } from "next/navigation";
import { metadata } from "./metadata";
import { Provider } from "react-redux";
import { persistor, store } from "./lib/store";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html
      lang="en"
      style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
    >
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="flex flex-col min-h-screen">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Header />
            <main className="flex-grow py-20">{children}</main>
            {pathname === "/login" || pathname === "/signup" ? "" : <Footer />}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
