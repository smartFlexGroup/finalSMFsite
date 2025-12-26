import { ThemeProvider } from "@/components/theme-provider";
import { CookieProvider } from "@/context/CookieContext";
import { AccessibilityProvider } from "@/context/AccessibilityContext";
import CookieBanner from "@/components/compliance/CookieBanner";
import CookieModal from "@/components/compliance/CookieModal";
import AccessibilityPanel from "@/components/compliance/AccessibilityPanel";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/footer/Footer";
import SupportBanner from "@/components/sections/SupportBanner";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Smart Flex Group",
  description: "Your Idea, Our Network, One Launchpad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <AccessibilityProvider>
            <CookieProvider>
              <NavBar />
              <main className="flex-1">
                {children}
              </main>
              <SupportBanner />
              <Footer />
              <CookieBanner />
              <CookieModal />
              <AccessibilityPanel />
            </CookieProvider>
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
