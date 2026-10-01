import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivam Maurya — Software Developer",
  description:
    "Portfolio of Shivam Maurya — Software Developer, AI/ML enthusiast and builder of digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}