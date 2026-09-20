import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AppShell } from "@/components/layout/AppShell";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  title: "ZAK Icons — Modern Open-Source Icon Ecosystem",
  description: "A consistent, open-source 24×24 vector icon ecosystem for web, mobile, and enterprise applications. Available for React, Blazor, Flutter, CSS, and SVG.",
  keywords: ["icons", "svg", "react icons", "blazor icons", "flutter icons", "logistics icons", "open source", "lucide alternative"],
  authors: [{ name: "Abdul Razak Shaikh", url: "https://arshaikh.vercel.app/" }],
  creator: "Abdul Razak Shaikh",
  publisher: "Abdul Razak Shaikh",
  metadataBase: new URL("https://zakicons.vercel.app"),
  openGraph: {
    title: "ZAK Icons — Modern Open-Source Icon Ecosystem",
    description: "320+ vector icons crafted on a 24×24 grid. Built for React, Blazor, Flutter, and CSS.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
