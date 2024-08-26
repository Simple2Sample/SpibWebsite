
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import Providers from '@/components/providers';
import { Metadata } from 'next';
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description : "Spitfire = Spib",
  title: "Spib",
  applicationName: 'Spib.no',
  creator: 'Simple Sæmple',
  robots: 'index, follow',
  icons: '/SpibBounce.gif',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">

      <body className={inter.className}>
        <Providers>
          {children}
          </Providers>
      </body>
    </html>
  );
}