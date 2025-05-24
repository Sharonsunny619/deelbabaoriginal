import React from 'react'
import './globals.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'My Ecommerce Store',
  description: 'Buy awesome products here.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
