import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fibsemOS - Unified control software for FIB-SEM microscopy",
  description:
    "Open-source platform unifying microscope drivers, automating complex workflows, and enabling reproducible cryo-electron tomography sample preparation.",
  icons: {
    icon: [
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
  metadataBase: new URL("https://www.fibsemos.org"),
  openGraph: {
    title: "fibsemOS",
    description: "Unified control software for FIB-SEM microscopy.",
    url: "https://www.fibsemos.org",
    siteName: "fibsemOS",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "fibsemOS" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "fibsemOS", description: "Unified control software for FIB-SEM microscopy.", images: ["/og-image.png"] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

