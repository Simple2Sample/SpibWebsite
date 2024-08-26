
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Providers from '@/components/providers';


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <Head>
      <title>Spib</title>
  <meta name="description" content="Spitfire = Spib" />
  <meta name="application-name" content="Spib.no"/>
  <link rel="icon" href="/SpibBounce.gif"/>
  
  
  <meta property="og:title" content="Spib"/>
  <meta property="og:type" content="website"/>
  <meta property="og:image" content="https://spib.no/SpibBounce.gif"/>
  <meta property="og:description" content="Spitfire = Spib"/>
  <meta property="og:url" content="https://spib.no"/>
  
        <style>{`
          body {
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
            height: 100vh; /* Ensure body takes full viewport height */
            margin: 0; /* Remove default margin */
            display: flex; /* Use flexbox to center content */
            justify-content: center;
            align-items: center;
          }
          body.loaded {
            visibility: visible;
            opacity: 1;
          }
        `}</style>
      </Head>
      <body className={inter.className}>
        <Providers>
          {children}
          </Providers>
      </body>
    </html>
  );
}