// apps/public-site/src/app/layout.tsx

import React from "react";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "DebtFreePlanner",
  description: "Strategically plan your journey to a Debt-Free Living.",
  author: "GUilder W. Milliner",
  keywords: [
    "Debt Management",
    "Financial Planning",
    "Debt-Free",
    "Debt Payoff",
    "Budgeting",
    "Finance",
  ],
  openGraph: {
    title: "DebtFreePlanner - Plan your journey to a Debt-Free Living",
    description:
      "Take control of your finances and manage your debt effectively with DebtFreePlanner. Achieve financial freedom by strategically planning your debt payoff.",
    url: "https://debtfreeplanner.app",
    siteName: "DebtFreePlanner",
    images: [
      {
        url: "https://debtfreeplanner.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DebtFreePlanner - Manage Your Debt Effectively",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DebtFreePlanner",
    description: "Strategically plan your journey to a Debt-Free Living.",
    creator: "@DebtFreePlanner",
    image: "https://debtfreeplanner.app/twitter-card.jpg",
  },
};

// Define a read-only props interface
interface RootLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
