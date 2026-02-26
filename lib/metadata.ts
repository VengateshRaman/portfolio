import type { Metadata } from "next";

const siteUrl = "https://vengatesh-raman.dev";
const ogImage = `${siteUrl}/api/og`;
const title = "Vengatesh Raman | Senior Frontend Engineer";
const description =
  "Senior Frontend Engineer with 13+ years building React and Next.js products. AI-augmented product engineer targeting Product MNC and FAANG teams.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Vengatesh Raman",
  },
  description,
  applicationName: "Vengatesh Raman Portfolio",
  referrer: "origin-when-cross-origin",
  creator: "Vengatesh Raman",
  publisher: "Vengatesh Raman",
  authors: [{ name: "Vengatesh Raman", url: siteUrl }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title,
    description,
    siteName: "Vengatesh Raman Portfolio",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Vengatesh Raman Senior Frontend Engineer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@vengateshraman",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  keywords: [
    "Vengatesh Raman",
    "Senior Frontend Engineer",
    "React Engineer",
    "Next.js Engineer",
    "AI-Augmented Engineering",
    "Frontend Portfolio",
  ],
};
