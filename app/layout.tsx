import './globals.css';
import type { Metadata } from 'next';
import { Inter, Tenor_Sans } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const tenorSans = Tenor_Sans({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-tenor',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'PiPi Print & Packaging | Healthcare & Decorative Packaging Specialists',
    template: '%s | PiPi Print & Packaging'
  },
  description: 'Premium packaging solutions for healthcare and consumer brands. Cartons, labels, leaflets delivered together, on time. ISO 9001:2015 & GMP certified.',
  keywords: ['packaging', 'healthcare packaging', 'pharmaceutical packaging', 'cartons', 'labels', 'leaflets', 'GMP certified', 'sustainable packaging'],
  authors: [{ name: 'PiPi Print & Packaging' }],
  creator: 'PiPi Print & Packaging',
  publisher: 'PiPi Print & Packaging',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://pipiprint.co.uk',
    title: 'PiPi Print & Packaging | Healthcare & Decorative Packaging Specialists',
    description: 'Premium packaging solutions for healthcare and consumer brands. Cartons, labels, leaflets delivered together, on time.',
    siteName: 'PiPi Print & Packaging',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PiPi Print & Packaging - Healthcare & Decorative Packaging Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PiPi Print & Packaging | Healthcare & Decorative Packaging Specialists',
    description: 'Premium packaging solutions for healthcare and consumer brands.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://pipiprint.co.uk',
    languages: {
      'en-GB': 'https://pipiprint.co.uk',
      'de-DE': 'https://pipiprint.co.uk/de',
      'fr-FR': 'https://pipiprint.co.uk/fr',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${tenorSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#111318" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}