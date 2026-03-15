import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apeka.dev — Convert your website into a polished Android APK",
  description:
    "Apeka.dev turns your website into a production-ready Android app. Launch faster with signed APKs, brand controls, and a guided build pipeline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
