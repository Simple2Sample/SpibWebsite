import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import Providers from '@/components/providers';
import { Metadata, Viewport } from 'next';
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const generateViewPort: Viewport = {
    colorScheme: 'dark',
}

export const metadata = {
  description: "Spitfire = Spib",
  title: "Spib",
  applicationName: 'Spib.no',
  creator: 'Simple Sæmple',
  robots: 'index, follow',
  openGraph: {
    title: 'Spib.no',
    description: `Spitfire = Spib. Spitfire stuff & personal website by Simple Sæmple.`,
    type: 'website',
    siteName: 'Spib.no',
    images: {
      url: 'https://derpicdn.net/img/view/2015/5/14/896071.gif',
      alt: 'The pegasus Spitfire',
    },
  },
};

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