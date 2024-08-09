import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styled, { ThemeProvider } from "styled-components";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spib",
  description: "Spitfire = Spib",
  applicationName:"Spib.no",
  icons:'/SpibBounce.gif',
  // The embed that shows up when you share a link


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const theme = {
    main: "mediumseagreen"
  };

  return (
    
    <html lang="en">


      <body className={inter.className}>{children}</body>

    </html>
  );
}
