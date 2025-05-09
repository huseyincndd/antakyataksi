import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Antakya Taksi - 7/24 Güvenilir Taksi Hizmeti",
  description: "Antakya'da 7/24 güvenilir, hızlı ve konforlu taksi hizmeti. Şehir içi ulaşım, havalimanı transferi ve özel günler için araç kiralama hizmetlerimizden faydalanın.",
  keywords: "antakya taksi, hatay taksi, güvenilir taksi, taksi durağı, havalimanı transfer, 7/24 taksi, antakya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
