import type { Metadata } from "next";
import { Bungee, Federant, Oswald } from "next/font/google";
import "./globals.css";

const bungee = Bungee({
  weight: "400",
  variable: "--font-bungee",
  subsets: ["latin"],
});

const federant = Federant({
  weight: "400",
  variable: "--font-federant",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "شِهد - اشتر الآن وادفع لاحقًا | Shahd - Buy Now Pay Later",
  description: "منصة تمويل مبتكرة تتيح لك الشراء فورًا والدفع لاحقًا عبر أقساط مريحة. حل شامل للعملاء وأصحاب المتاجر.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${bungee.variable} ${federant.variable} ${oswald.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
