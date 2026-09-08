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
      { url: "/favicons/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicons/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicons/favicon.ico?v=2",
    apple: "/favicons/apple-touch-icon.png?v=2",
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

