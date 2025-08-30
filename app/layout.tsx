// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dra. Haymar Marcano Millán | Pediatría",
  description:
    "Cuidado pediátrico con calidez y evidencia. Consultas, control del niño sano y educación para familias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${poppins.className} text-neutral-800 antialiased`}>
        {/* NAV */}
        <header className="border-b bg-white/70 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              {/* Si subes un logo a /public/logo.svg, se mostrará */}
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">H</span>
              <span className="font-semibold">Dra. Haymar</span>
            </Link>

            <div className="hidden gap-6 md:flex">
              <Link href="/" className="hover:text-emerald-700">Inicio</Link>
              <Link href="/consulta" className="hover:text-emerald-700">Consulta</Link>
              <Link href="/contacto" className="hover:text-emerald-700">Contacto</Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="mt-20 border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-500">
            © {new Date().getFullYear()} Dra. Haymar Marcano Millán — Pediatría.
          </div>
        </footer>
      </body>
    </html>
  );
}
