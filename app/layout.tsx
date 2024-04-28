import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { ToasterProvider } from "@/components/providers/toaster-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Wise",
  description: "Learn Wise is a platform for learning new things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
