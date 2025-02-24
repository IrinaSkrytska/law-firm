import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Inter, Mulish } from "next/font/google";
import Container from "./components/Container/Container";

const inter = Inter({ subsets: ["latin"], variable: "Inter" });
const mulish = Mulish({ subsets: ["latin"], variable: "Mulish" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mulish.variable}`}>{children}</body>
    </html>
  );
}
