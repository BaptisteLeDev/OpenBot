import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenBot - Bot Discord pour OpenFront",
  description: "Bot Discord pour gérer vos parties OpenFront. Créez et configurez vos parties directement depuis Discord.",
  keywords: ["Discord", "Bot", "OpenFront", "Gaming", "API", "WebSocket"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
