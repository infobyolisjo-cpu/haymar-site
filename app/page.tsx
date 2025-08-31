import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* NAV */}
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-teal text-white font-bold">H</span>
            <span className="font-semibold">Dra. Haymar</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-primary">Inicio</Link>
            <Link href="/consulta" className="hover:text-primary">Consulta</Link>
            <Link href="/contacto" className="hover:text-primary">Contacto</Link>
          </nav>
          <Link
            href="https://wa.me/584248190169?text=Hola%20Dra.%20Quisiera%20agendar%20una%20cita"
            className="btn btn-teal"
            target="_blank"
          >
            WhatsApp
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-mint to-offwhite">
        <div className="container grid md:grid-cols-2 gap-8 py-12 md:py-16 items-center">
          <div className="space-y-5">
            <span className="inline-flex text-xs font-semibold tracking-wider uppercase text-primary/80">
              Pediatría • Puericultura
            </span>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-slate-900">
              Cuidado pediátrico con <span className="text-primary">calidez</span> y <span className="text-primary">evidencia</span>
            </h1>
            <p className="text-slate-600">
              Consultas pediátricas, control del niño sano, nutrición y guía a familias.
              Atención cercana, respetuosa y basada en buenas prácticas.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="https://wa.me/584248190169?text=Hola%20Dra.%20Quisiera%20agendar%20una%20consulta"
                className="btn btn-primary"
                target="_blank"
              >
                Agendar por WhatsApp
              </Link>
              <Link href="/consulta" className="btn btn-outline">
                Probar chat educativo
              </Link>
              <Link href="/contacto" className="btn btn-teal">
                Escribir mensaje
              </Link>
            </div>

            <div className="flex gap-3 pt-3">
              <div className="badge-stat">
                <div className="text-xl font-bold text-primary">10+</div>
                <div className="text-xs text-slate-600">Años de experiencia</div>
              </div>
              <div className="badge-stat">
                <div className="text-xl font-bold text-primary">1000+</div>
                <div className="text-xs text-slate-600">Niños atendidos</div>
              </div>
              <div className="badge-stat">
                <div className="text-xl font-bold text-primary">24/7</div>
                <div className="text-xs text-slate-600">Disponibilidad</div>
              </div>
            </div>
          </div>

          {/* Foto sin fondo, recortada y contenida */}
          <div className="relative mx-auto w-full max-w-md">
            <Image
              src="/dra-haymar-hero.png"
              alt="Dra. Haymar Marcano Millán — Pediatra"
              width={800}
              height={900}
              priority
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* SERVICIOS: tarjetas con tus colores */}
      <section className="container py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Servicios</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="card-soft bg-mint/60">
            <h3 className="font-semibold text-slate-900">Consulta pediátrica</h3>
            <p className="text-sm text-slate-700 mt-2">
              Evaluación general y seguimiento con enfoque humano.
            </p>
          </div>
          <div className="card-soft bg-teal/15">
            <h3 className="font-semibold text-slate-900">Control del niño sano</h3>
            <p className="text-sm text-slate-700 mt-2">
              Crecimiento, desarrollo y consejería a familias.
            </p>
          </div>
          <div className="card-soft bg-coral/15">
            <h3 className="font-semibold text-slate-900">Nutrición y lactancia</h3>
            <p className="text-sm text-slate-700 mt-2">
              Apoyo práctico, respetuoso y basado en evidencia.
            </p>
          </div>
          <div className="card-soft bg-orange/15">
            <h3 className="font-semibold text-slate-900">Vacunación</h3>
            <p className="text-sm text-slate-700 mt-2">
              Calendario y orientación informada.
            </p>
          </div>
          <div className="card-soft bg-offwhite">
            <h3 className="font-semibold text-slate-900">Teleconsulta</h3>
            <p className="text-sm text-slate-700 mt-2">
              Orientación inicial y dudas frecuentes.
            </p>
          </div>
          <div className="card-soft bg-mint/40">
            <h3 className="font-semibold text-slate-900">Educación a padres</h3>
            <p className="text-sm text-slate-700 mt-2">
              Herramientas para el día a día.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-primary text-white">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold">¿Agendamos?</h3>
            <p className="text-white/80">
              Tel. +58 424-8190169 · Instagram: @dra.haymarmarcano · haymarmarcano@gmail.com
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="https://wa.me/584248190169"
              target="_blank"
              className="btn bg-white text-primary hover:opacity-90"
            >
              WhatsApp
            </Link>
            <Link href="/contacto" className="btn btn-outline bg-white/10 text-white border-white/40 hover:bg-white/15">
              Contacto
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="container py-6 text-sm text-slate-600">
          © 2025 Dra. Haymar Marcano Millán — Pediatría.
        </div>
      </footer>
    </main>
  );
}

