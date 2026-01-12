import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Explorer from "../components/Explorer";
import Editor from "../components/Editor";
import DesktopOnlyGuard from "../components/DesktopOnlyGuard";
import { LanguageProvider } from "../components/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LEVI Portfolio",
  description: "Fullstack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} font-orbitron antialiased bg-[#0b0e17] text-[#cccccc] h-screen flex overflow-hidden`}
        >
        <LanguageProvider>
          <DesktopOnlyGuard>
            <Explorer />
            <div className="flex-1 h-full">
              <Editor>
                {children}
              </Editor>
            </div>
          </DesktopOnlyGuard>
        </LanguageProvider>
      </body>
    </html>
  );
}
