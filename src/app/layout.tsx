import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayoutWrapper from "@/components/layout/MainLayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Jelantik - Internet Fiber Optic Tercepat & Terbaik",
    template: "%s | Jelantik",
  },
  description: "Jelantik - Penyedia Layanan Internet (ISP) Fiber Optic terbaik untuk perumahan dan rusun. Nikmati internet cepat, stabil, tanpa FUP, dan harga terjangkau.",
  keywords: ["ISP perumahan", "internet rusun", "provider internet terbaik", "internet fiber optic", "wifi murah rumah", "pasang wifi rusun", "Jelantik Internet", "ISP Jakarta"],
  authors: [{ name: "Jelantik" }],
  creator: "Jelantik",
  publisher: "Jelantik",
  icons: {
    icon: [
      { url: "/images/icons/icon-48.webp", sizes: "48x48", type: "image/webp" },
      { url: "/images/icons/icon-72.webp", sizes: "72x72", type: "image/webp" },
      { url: "/images/icons/icon-96.webp", sizes: "96x96", type: "image/webp" },
      { url: "/images/icons/icon-128.webp", sizes: "128x128", type: "image/webp" },
      { url: "/images/icons/icon-192.webp", sizes: "192x192", type: "image/webp" },
    ],
    apple: [
      { url: "/images/icons/icon-192.webp", sizes: "192x192", type: "image/webp" },
    ],
  },
  manifest: "/manifest.json",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.jelantik.com"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.jelantik.com",
    title: "Jelantik - ISP Fiber Optic Terbaik untuk Perumahan & Rusun",
    description: "Provider internet fiber optic 100% khusus perumahan dan rusun dengan kecepatan tinggi dan harga terbaik.",
    siteName: "Jelantik",
    images: [
      {
        url: "/images/icons/icon-512.webp",
        width: 512,
        height: 512,
        alt: "Jelantik Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jelantik - Internet Fiber Optic Tercepat & Terbaik",
    description: "Solusi internet fiber optic 100% dengan kecepatan tinggi dan harga terjangkau.",
    images: ["/images/icons/icon-512.webp"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ChatBot from "@/components/ChatBot";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} font-sans`}>
      <body className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <MainLayoutWrapper>{children}</MainLayoutWrapper>
        <FloatingWhatsApp />
        <ChatBot />
      </body>
    </html>
  );
}
