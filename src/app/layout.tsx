import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import CookieConsentWrapper from "@/components/CookieConsentWrapper";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phoenix Security - Securing the Future",
  description: "Elite penetration testing, incident response, and cybersecurity training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">
          {children}
          <CookieConsentWrapper />
          <Analytics />
          <SpeedInsights />
          <Script 
            defer 
            data-domain="phoenix-sec.org" 
            src="https://plausible.io/js/script.js" 
            strategy="afterInteractive"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
