import './globals.css';
import WhatsAppButton from '@/components/WhatsAppButton';
import type { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Dra. Haymar Marcano Millán | Pediatría',
  description: 'Consultas pediátricas y orientación a familias.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <strong>Dra. Haymar</strong>
          <nav className="nav">
            <Link href="/">Inicio</Link>
            <Link href="/consulta">Consulta</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
