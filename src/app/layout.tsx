import "./globals.css";
import "atropos/css";

import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import CustomCursor from "@/components/cursor";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Relax - Ai",
  description: "Powered by Relax Ai - Relax with Ai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased grainy",
          inter.className
        )}
      >
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
