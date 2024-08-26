
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
  openGraph: {
    title: 'Spib.no',
    description: 'Spitfire = Spib',
    type: 'website',
    siteName: 'Spib.no',
    images: [
      {
        url: 'https://derpicdn.net/img/view/2015/5/14/896071.gif',
        alt: 'The pegasus Spitfire',
      },
    ],
  },
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