﻿// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Dra. Haymar | Pediatría y Puericultura",
  description: "Acompañamiento pediátrico respetuoso para familias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
