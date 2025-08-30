// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
// Si ya creaste el componente, descomenta estas dos líneas:
// import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Dra. Haymar Marcano Millán | Pediatría",
  description:
    "Consulta pediátrica, control del niño sano y orientación educativa para familias. Atención cálida, cercana y basada en evidencia.",
  metadataBase: new URL("https://haymar-site.vercel.app"),
  openGraph: {
    title: "Dra. Haymar Marcano Millán | Pediatría",
    description:
      "Consulta pediátrica, control del niño sano y orientación educativa para familias.",
    url: "https://haymar-site.vercel.app",
    siteName: "Dra. Haymar",
    type: "website",
  },
  alternates: {
    canonical: "https://haymar-site.vercel.app",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}

        {/* Botón flotante de WhatsApp en todo el sitio.
            Para activarlo, asegúrate de tener:
            /components/WhatsAppButton.tsx
            Luego descomenta la importación y esta línea. */}
        {/* <WhatsAppButton /> */}
      </body>
    </html>
  );
}

