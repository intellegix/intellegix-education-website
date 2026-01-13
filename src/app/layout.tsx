import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Intellegix Education | Open Source Educational Technology",
  description: "A non-profit organization democratizing tech education through open source learning programs. Featuring Sparkle Shop and Ticino educational platforms.",
  keywords: ["education", "open source", "non-profit", "educational technology", "e-commerce education", "language learning"],
  authors: [{ name: "Austin Kidwell" }],
  creator: "Intellegix Education",
  publisher: "Intellegix Education",
  metadataBase: new URL("https://intellegixeducation.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://intellegixeducation.org",
    title: "Intellegix Education | Open Source Educational Technology",
    description: "A non-profit organization democratizing tech education through open source learning programs.",
    siteName: "Intellegix Education",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intellegix Education | Open Source Educational Technology",
    description: "A non-profit organization democratizing tech education through open source learning programs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
