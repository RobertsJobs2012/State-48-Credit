import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { BackToTop } from "@/components/layout/BackToTop";
import { SocialProofToast } from "@/components/layout/SocialProofToast";
import { JsonLd } from "@/components/JsonLd";
import {
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  personSchema,
} from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Arizona's Most Trusted Credit Repair`,
    template: `%s · ${site.name}`,
  },
  description:
    "Flat-fee credit repair in Phoenix, Arizona. Founded 2010 by an identity-theft survivor. 15,892 items removed, $20.4M in debt eliminated. No monthly fees, no long contracts.",
  keywords: [
    "credit repair Arizona",
    "credit repair Phoenix",
    "Phoenix credit repair",
    "Arizona credit repair company",
    "remove collections from credit report",
    "identity theft recovery Arizona",
    "mortgage credit repair Phoenix",
  ],
  applicationName: site.name,
  authors: [{ name: "Robert Garcia" }],
  creator: site.name,
  publisher: site.legalName,
  category: "Financial Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Arizona's Most Trusted Credit Repair`,
    description:
      "Flat-fee credit repair in Phoenix, Arizona. 15,892 items removed for 2,041 clients since 2010.",
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Arizona's Most Trusted Credit Repair`,
    description:
      "Flat-fee credit repair in Phoenix, Arizona. 15,892 items removed for 2,041 clients since 2010.",
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: site.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#141210",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd
          data={[
            organizationSchema(),
            localBusinessSchema(),
            websiteSchema(),
            personSchema(),
          ]}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <AnnouncementBar />
        <Navbar />
        <ScrollProgress />
        <main id="main">{children}</main>
        <Footer />
        <FloatingCTA />
        <BackToTop />
        <SocialProofToast />
      </body>
    </html>
  );
}
