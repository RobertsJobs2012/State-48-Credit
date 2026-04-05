import type {Metadata} from 'next';
import {Sora, DM_Sans} from 'next/font/google';
import './globals.css';
import {Navbar} from '@/components/Navbar';
import {Footer} from '@/components/Footer';
import {AnnouncementBar} from '@/components/AnnouncementBar';
import {PageLoadAnimation} from '@/components/PageLoadAnimation';
import {ScrollProgress} from '@/components/ScrollProgress';
import {ClientProviders} from '@/components/ClientProviders';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://state48credit.com'),
  title: {
    default: 'State 48 Credit | Arizona\'s Premier Credit Repair',
    template: '%s | State 48 Credit',
  },
  description: 'Arizona\'s top credit repair company. We remove collections, repossessions, bankruptcies & more. 2,041 clients helped. Free consultation.',
  openGraph: {
    title: 'State 48 Credit | Arizona\'s Premier Credit Repair',
    description: 'Arizona\'s top credit repair company. 2,041 clients helped. 15,892 items deleted. Free consultation.',
    siteName: 'State 48 Credit',
    locale: 'en_US',
    type: 'website',
    url: 'https://state48credit.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'State 48 Credit | Arizona\'s Premier Credit Repair',
    description: 'Arizona\'s top credit repair company. 2,041 clients helped. 15,892 items deleted.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#141210" />
      </head>
      <body className="bg-background text-text-body font-sans antialiased flex flex-col min-h-screen">
        <ScrollProgress />
        <ClientProviders>
          <PageLoadAnimation>
            <AnnouncementBar />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </PageLoadAnimation>
        </ClientProviders>
      </body>
    </html>
  );
}
