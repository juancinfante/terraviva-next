import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terraviva - Nuestro folclore, nuestra gente.",
  description: "Diario digital de folclore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2253651827539146"></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2253651827539146"
          crossOrigin="anonymous">
        </script>
      </head>
      <body
        className={`${roboto.variable} antialiased`}
      >
        <div className=" min-h-screen flex flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
