import { Metadata } from 'next';

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