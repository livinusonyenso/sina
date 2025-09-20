import type { Metadata } from "next";
import Layout from "@/components/Layout";

import { Barlow } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sina Consulting",
  description:
    "Global IT Consulting Company that delivers innovative solutions. Help businesses thrive in the digital age.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Sina Consulting",
    description:
      "Global IT Consulting Company that delivers innovative solutions. Help businesses thrive in the digital age.",
    url: "https://sinaconsulting.vercel.app/",
    siteName: "Sina Consulting",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Sina Consulting",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sina Consulting",
    description:
      "Global IT Consulting Company that delivers innovative solutions. Help businesses thrive in the digital age.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.variable} antialiased`}>
        <Layout>{children}</Layout>
        <script defer src="/scripts/jquery-3.7.1.min.js"></script>
        <script defer src="/scripts/owl.carousel.min.js"></script>
        <script defer src="/scripts/index.js"></script>
        {/* <Script
          defer
          src="/scripts/jquery-3.7.1.min.js"
          strategy="beforeInteractive"
        />
        <Script
          defer
          src="/scripts/owl.carousel.min.js"
          strategy="afterInteractive"
        />
        <Script defer src="/scripts/index.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
