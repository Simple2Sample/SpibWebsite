import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapClient from '@/components/BootstrapClient.js';
import { Inter } from "next/font/google";
import "./globals.css";


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

 
  return (
    
    <html lang="en">
      <BootstrapClient />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
