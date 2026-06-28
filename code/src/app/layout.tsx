import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NetworkStatusBanner from "./components/common/networkStatus";
import Script from "next/script";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmallTech | AI Solutions for Enterprises",
  description: "SmallTech builds tailored software solutions — AI integration, web & app development, cloud architecture, and continuous delivery for businesses of all sizes.",
  keywords: ["AI solutions", "enterprise AI", "agentic AI", "AI integration", "web development", "app development", "cloud architecture", "tech solutions", "SmallTech"],
  robots: "index, follow",
  alternates: {
    canonical: "https://smalltech.in",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "SmallTech | AI Solutions for Enterprises",
    description: "SmallTech builds tailored software solutions — AI integration, web & app development, cloud architecture, and continuous delivery for businesses of all sizes.",
    url: "https://smalltech.in",
    siteName: "SmallTech",
    images: [
      {
        url: "https://smalltech.in/logo.png",
        alt: "SmallTech Logo",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmallTech | AI Solutions for Enterprises",
    description: "SmallTech builds tailored software solutions — AI integration, web & app development, cloud architecture, and continuous delivery for businesses of all sizes.",
    images: ["https://smalltech.in/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SmallTech",
  "url": "https://smalltech.in",
  "logo": "https://smalltech.in/logo.png",
  "description": "SmallTech builds tailored software solutions — AI integration, web & app development, cloud architecture, and continuous delivery for businesses of all sizes.",
  "sameAs": ["https://github.com/smallTechOrg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YTYS0G2P7L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YTYS0G2P7L');
          `}
        </Script>
        {/* Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17476588629"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17476588629'); 
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.variable} antialiased min-h-screen flex flex-col`}
      >
        <NetworkStatusBanner />

        <main className="flex-1">{children} </main>

      </body>
    </html>
  );
}
