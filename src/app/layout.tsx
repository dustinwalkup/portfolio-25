import type { Metadata } from "next";
import { Toaster } from "sonner";

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
      <body className={rubik.className}>
        {children}{" "}
        <Toaster
          richColors
          position="top-right"
          toastOptions={{
            style: {
              background: "rgba(40, 0, 64, 0.5)",
              color: "white",
              border: "1px solid #FF00FF",
              backdropFilter: "blur(10px)",
            },
            className: "shadow-glow-fuchsia text-white",
          }}
        />
      </body>
    </html>
  );
}
