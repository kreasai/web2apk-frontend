import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://apeka.dev"),
  title: {
    default: "Apeka.dev — Ubah Website Menjadi APK Android",
    template: "%s | Apeka.dev",
  },
  description:
    "Apeka.dev membantu Anda mengubah website menjadi APK Android siap rilis dengan alur build terstruktur, branding, dan proses signing yang lebih cepat.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Apeka.dev — Ubah Website Menjadi APK Android",
    description:
      "Konversi website ke APK Android dengan workflow yang rapi, cepat, dan siap untuk proses publikasi.",
    url: "https://apeka.dev",
    siteName: "Apeka.dev",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apeka.dev — Ubah Website Menjadi APK Android",
    description:
      "Bangun APK Android dari website Anda dengan proses yang lebih cepat dan siap produksi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
