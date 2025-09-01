// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Dra. Haymar | Pediatr�a y Puericultura",
  description: "Acompa�amiento pedi�trico respetuoso para familias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}