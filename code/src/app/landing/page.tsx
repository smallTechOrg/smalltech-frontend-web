import type { Metadata } from "next";
import LandingPro from "../components/landingPro";

export const metadata: Metadata = {
  title: "smallTech, AI for Everyone",
  description: "smallTech builds Zer0: agents that operationalise agentic AI for small businesses, with human approval at every step. Plus applied AI, consulting and practitioner-led AI training. 700+ professionals trained.",
  alternates: {
    canonical: "https://smalltech.in",
  },
  openGraph: {
    title: "smallTech, AI for Everyone",
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
};

export default function LandingPage() {
  return <LandingPro />;
}
