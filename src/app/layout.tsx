"use client";
import i18n from "../i18n"
import "./globals.css";

import { Poppins, Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
 <html lang={i18n.language}

      suppressHydrationWarning
      className={`${poppins.variable} ${montserrat.variable}`}
    >
      <body className="font-montserrat transition-colors">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {children}
</ThemeProvider>
      </body>
    </html>
  );
}
