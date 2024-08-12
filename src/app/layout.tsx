"use client";
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { metadata } from './metadata';


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
      <title>Spib</title>
  <meta name="description" content="Spitfire = Spib" />
  <meta name="application-name" content="Spib.no"/>
  <link rel="icon" href="/SpibBounce.gif"/>
  
  
  <meta property="og:title" content="Spib"/>
  <meta property="og:description" content="Spitfire = Spib"/>
  <meta property="og:url" content="https://spib.no"/>
  <meta property="og:type" content="website"/>
  <meta property="og:image" content="https://spib.no/SpibBounce.gif"/>
  <meta property="og:image:width" content="800"/>
  <meta property="og:image:height" content="600"/>
  <meta property="og:image:alt" content="Spib Logo"/>
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