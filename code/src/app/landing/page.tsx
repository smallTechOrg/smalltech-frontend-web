import type { Metadata } from "next";
import LandingPro from "../components/landingPro";

export const metadata: Metadata = {
  title: "SmallTech | AI Solutions for Enterprises",
  description: "SmallTech builds tailored software solutions — AI integration, web & app development, cloud architecture, and continuous delivery for businesses of all sizes.",
  alternates: {
    canonical: "https://smalltech.in",
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
};

export default function LandingPage() {
  return <LandingPro />;
}
