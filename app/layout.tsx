// app/layout.tsx
import "./globals.css";

import { Manrope } from "next/font/google";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Audiophile E-commerce</title>
        <meta
          name="description"
          content="Audiophile E-commerce site built with Next.js and Tailwind CSS"
        />
      </head>
      <body className={manrope.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
