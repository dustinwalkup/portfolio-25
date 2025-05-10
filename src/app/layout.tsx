import type { Metadata } from "next";
import { rubik, permanentMarker, creepster, bangers } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dustin Walkup",
  description: "Portfoio of Dustin Walkup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${permanentMarker.variable} ${creepster.variable} ${bangers.variable}`}
    >
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
