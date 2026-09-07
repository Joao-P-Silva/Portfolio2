"use client";

import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import "./globals.css";

const geistSans = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Portfolio pessoal com projetos, habilidades e contato para trabalhos em produtos digitais.",
};

function RouteTitle() {
  const pathname = usePathname();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Portfolio | Home",
      "/login": "Portfolio | Login",
      "/manutentionpage": "Portfolio | Manutenção",
    };

    document.title = titles[pathname] ?? "Portfolio";
  }, [pathname]);

  return null;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <RouteTitle />
        {children}
      </body>
    </html>
  );
}
