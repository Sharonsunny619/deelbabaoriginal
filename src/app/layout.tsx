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
import FooterPayment from "@/components/footer/footer_payment";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const PaymentPage = pathname.startsWith("/payment-page");
  const ServicePaymentPage = pathname.startsWith("/service-payment-page");
  const WorkersRegistrationPage = pathname.startsWith("/workers-registration");



 
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
            {PaymentPage || ServicePaymentPage || WorkersRegistrationPage ? "" : <Header />}
            <main
              className={`flex-grow ${PaymentPage || ServicePaymentPage || WorkersRegistrationPage ? "py-5 px-16" : "py-20"}`}
            >
              {children}
            </main>
            {pathname === "/login" || pathname === "/signup" ?
            "":
            PaymentPage || ServicePaymentPage || WorkersRegistrationPage ? (
              <FooterPayment />
            ) : (
              <Footer />
            )}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
