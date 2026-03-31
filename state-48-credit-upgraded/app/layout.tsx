import type {Metadata} from 'next';
import {Sora, DM_Sans} from 'next/font/google';
import './globals.css';
import {Navbar} from '@/components/Navbar';
import {Footer} from '@/components/Footer';
import {SmoothScroll} from '@/components/SmoothScroll';
import {AnnouncementBar} from '@/components/AnnouncementBar';
import {CustomCursor} from '@/components/CustomCursor';
import {PageLoadAnimation} from '@/components/PageLoadAnimation';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'State 48 Credit | Arizona\'s Premier Credit Repair',
  description: 'Arizona\'s top credit repair company. We remove collections, repossessions, bankruptcies & more. Free consultation.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="bg-background text-text-body font-sans antialiased flex flex-col min-h-screen">
        <CustomCursor />
        <SmoothScroll>
          <PageLoadAnimation>
            <AnnouncementBar />
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </PageLoadAnimation>
        </SmoothScroll>
      </body>
    </html>
  );
}
