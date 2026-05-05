import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import Footer from "@/components/layout/footer/footer";
import Script from "next/script";
import GoogleAnalytics from "@/components/analytics/google-analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AreaBazar — Your Local Marketplace",
    template: "%s | AreaBazar",
  },

  description:
    "Find & buy from your trusted local marketplace. Discover shops, products, and deals near you with AreaBazar.",

  keywords: [
    "AreaBazar",
    "local marketplace",
    "online bazar",
    "shop near me",
    "Bangladesh marketplace",
    "buy local products",
    "Khulna bazar",
  ],

  authors: [{ name: "AreaBazar Team" }],
  creator: "AreaBazar",
  metadataBase: new URL("https://areabazar.com"),

  openGraph: {
    title: "AreaBazar — Your Local Marketplace",
    description:
      "Discover and shop from local markets easily. AreaBazar connects you with nearby shops and products.",
    url: "https://areabazar.com",
    siteName: "AreaBazar",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "AreaBazar Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Area Bazar — Your Local Marketplace",
    description: "Find & buy from your local marketplace with ease.",
    images: ["/icon.png"],
  },

  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  category: "ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <Navbar pathname="/" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
