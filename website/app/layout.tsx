import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kallotech.github.io/portfolio/'),
  title: 'Nassi Mandalas - Creative Engineer',
  description:
    'Industrial design, creative engineering, CAD and physical prototyping by Nassi Mandalas.',
  openGraph: {
    title: 'Nassi Mandalas - Creative Engineer',
    description: 'Selected work in product design, CAD and physical prototyping.',
    images: ['og.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nassi Mandalas - Creative Engineer',
    description: 'Selected work in product design, CAD and physical prototyping.',
    images: ['og.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
