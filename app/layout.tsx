// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dra. Haymar Marcano – Pediatría",
  description:
    "Cuidado pediátrico con calidez y evidencia. Consultas, control del niño sano, nutrición y guía a familias.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="font-semibold text-slate-900">
              <span className="rounded-xl bg-emerald-100 px-2 py-1 text-emerald-700">Dra. Haymar</span>
            </Link>

            <div className="flex gap-4 text-sm">
              <Link className="hover:text-emerald-700" href="/">Inicio</Link>
              <Link className="hover:text-emerald-700" href="/consulta">Consulta</Link>
              <Link className="hover:text-emerald-700" href="/contacto">Contacto</Link>
              <a
                href="https://wa.me/584248190169?text=Hola%20Dra.%20Haymar%2C%20quisiera%20agendar%20consulta"
                className="rounded-lg bg-emerald-600 px-3 py-1.5 font-medium text-white shadow-sm hover:bg-emerald-700"
                target="_blank"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="mt-16 border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Dra. Haymar Marcano Millán — Pediatría.</p>
              <div className="flex gap-4">
                <a href="https://instagram.com/dra.haymarmarcano" target="_blank" className="hover:text-emerald-700">
                  Instagram
                </a>
                <a href="mailto:haymarmarcano@gmail.com" className="hover:text-emerald-700">
                  haymarmarcano@gmail.com
                </a>
                <a href="tel:+584248190169" className="hover:text-emerald-700">
                  +58 424-8190169
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
