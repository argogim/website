import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#040817",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://argogim.com"),
  title: "ARGO-GIM · Inside insight",
  description:
    "ARGO-GIM: una capsula ingeribile per conoscere e seguire nel tempo la salute del tuo intestino, a casa e senza preparazione intestinale.",
  openGraph: {
    title: "ARGO-GIM · Inside insight",
    description:
      "Il tuo intestino, visto da dentro. A casa, senza preparazione, senza paura.",
    url: "https://argogim.com",
    siteName: "ARGO-GIM",
    images: [
      {
        url: "/assets/capsule-cut.webp",
        width: 1200,
        height: 630,
        alt: "ARGO-GIM Capsule",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARGO-GIM · Inside insight",
    description:
      "Il tuo intestino, visto da dentro. A casa, senza preparazione, senza paura.",
    images: ["/assets/capsule-cut.webp"],
  },
  icons: {
    icon: "/assets/mark.webp",
    apple: "/assets/mark.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
