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
  title: "smallTech, Agentic AI for Small Businesses",
  description: "smallTech builds Zer0: agents that operationalise agentic AI for small businesses, with human approval at every step. Plus applied AI, consulting and practitioner-led AI training. 700+ professionals trained.",
  keywords: ["Zer0", "agentic AI for small business", "AI agents for small business", "AI workflow automation", "AI training", "agentic AI training", "corporate AI training India", "AI training for executives", "multi-agent systems", "Claude Code training", "enterprise AI transformation", "AI adoption roadmap", "smallTech"],
  robots: "index, follow",
  alternates: {
    canonical: "https://smalltech.in",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "smallTech, Agentic AI for Small Businesses",
    description: "smallTech builds Zer0: agents that operationalise agentic AI for small businesses, with human approval at every step. Plus applied AI, consulting and practitioner-led AI training. 700+ professionals trained.",
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
    title: "smallTech, Agentic AI for Small Businesses",
    description: "smallTech builds Zer0: agents that operationalise agentic AI for small businesses, with human approval at every step. Plus applied AI, consulting and practitioner-led AI training. 700+ professionals trained.",
    images: ["https://smalltech.in/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SmallTech",
  "url": "https://smalltech.in",
  "logo": "https://smalltech.in/logo.png",
  "description": "smallTech builds Zer0: agents that operationalise agentic AI for small businesses, with human approval at every step. Plus applied AI, consulting and practitioner-led AI training. 700+ professionals trained.",
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
        {/* smallTech analytics: one GA4 property for every site (see public/st-analytics.js) */}
        <Script src="/st-analytics.js" strategy="afterInteractive" />
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
