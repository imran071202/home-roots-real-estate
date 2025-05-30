
import Navbar from "@/components/Navbar";
import Connect from '@/components/Connect'
import Footer from "@/components/Footer";
import { ToastContainer} from 'react-toastify';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home Roots",
  description: "Real estate Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        /></head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased lightMode`}>
        <Navbar/>
        {children}
              <ToastContainer position="top-right" autoClose={5000} />

        <Connect/>
        <Footer/>
      </body>
    </html>
  );
}
