import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Bases del sorteo – Meta Quest 3S | ERNI",
  description:
    "Bases legales del sorteo de unas gafas Meta Quest 3S organizado por ERNI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-foreground">
        {children}
      </body>
    </html>
  );
}
