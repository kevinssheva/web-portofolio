import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Sebastian | Website",
  description:
    "A passionate and detail-oriented software engineering enthusiast.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <link rel="icon" href="/char-icon.svg" sizes="any" />
      <body className={`${inter.className} ${inter.variable} ${sora.variable}`}>
        <ActiveSectionContextProvider>
          <Navbar />
          <div className="container mx-auto px-[5%]">{children}</div>
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
