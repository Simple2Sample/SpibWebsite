"use client";
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { Metadata } from 'next';


const inter = Inter({ subsets: ["latin"] });
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
const LoadingText = styled.p`
  text-align: center;
`;
export const metadata: Metadata = {
  title: "Spib",
  description: "Spitfire = Spib",
  applicationName: "Spib.no",
  icons: '/SpibBounce.gif',
  openGraph: {
    title: "Spib",
    description: "Spitfire = Spib",
    url: "https://spib.no",
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/SpibBounce.gif",
        width: 800,
        height: 600,
        alt: "Spib Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <html lang="en">
      <Head>
        <metadata />
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
      <body className={`${inter.className} ${isLoading ? '' : 'loaded'}`}>
        {isLoading ? (
          <LoadingContainer>
            <LoadingText>Loading...</LoadingText>
          </LoadingContainer>
        ) : (
          children
        )}
      </body>
    </html>
  );
}