import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegistrar } from "@/components/sw-register";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ultra 2026 Planner",
  description: "Personal schedule tracker for Ultra Music Festival Miami 2026",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ultra 2026",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className={inter.className}>
        {children}
        <ServiceWorkerRegistrar />
      </body>
    </html>
  );
}
