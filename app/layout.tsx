import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crime Scene Reconstruction",
  description: "Interactive exploration of evidence, timeline, and suspects for a fictional investigation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
