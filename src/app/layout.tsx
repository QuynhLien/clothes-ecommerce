import type { Metadata } from "next";
import { lora } from "./fonts";
import "./globals.css";
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";

export const metadata: Metadata = {
  title: "Fashion",
  icons: "/socialMedia/instagram.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.className} bg-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
