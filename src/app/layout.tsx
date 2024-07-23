import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LanguageSwitcher from "./components/languageSwithcer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Language Translation",
  description: "Next Language Translation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={inter.className}>


        {/* <LanguageSwitcher /> */}
        {children}</body>
    </html>
  );
}
