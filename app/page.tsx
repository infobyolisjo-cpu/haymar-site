// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-emerald-50 to-sky-50">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          {/* Columna texto */}
          <div>
            <p className="text-sm font-semibold text-emerald-700">Dra. Haymar</p>
            <h1 className="mt-2 text-4xl/tight md:text-5xl/tight font-bold text-slate-900">
              Cuidado pediátrico con calidez y evidencia.
            </h1>
            <p className="mt-4 text-slate-700">
              Consultas pediátricas, control del niño sano, nutrición y guía a
              familias. Atención cercana, respetuosa y basada en buenas prácticas.
            </p>

            {/* Botones */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/584248190169"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-white font-semibold shadow-sm hover:bg-emerald-700"
              >
                Agendar por WhatsApp
              </a>
              <Link
                href="/consulta"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2.5 font-semibold text-slate-800 hover:bg-white/60"
              >
                Probar chat educativo
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2.5 font-semibold text-slate-800 hover:bg-white/60"
              >
                Escribir mensaje
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              Tel. +58 424-8190169 · Instagram: @dra.haymarmarcano / @somos_creciendojuntos
            </p>
          </div>

          {/* Columna imagen */}
          <div className="flex justify-center">
            {/* usa la imagen que subiste a /public */}
            <Image
              src="/dra-haymar-hero.jpg"
              alt="Dra. Haymar Marcano Millán — Pediatra"
              width={640}
              height={800}
              priority
              className="w-full h-auto max-w-md md:max-w-lg rounded-2xl object-cover shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Sección Servicios */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-900">Servicios</h2>
        <p className="mt-2 text-slate-700">
          Atención integral y acompañamiento a familias.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Consulta pediátrica",
            "Control del niño sano",
            "Nutrición y lactancia",
            "Vacunación",
            "Teleconsulta",
            "Educación a padres",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">{item}</h3>
              <p className="mt-1 text-sm text-slate-600">
                Información y acompañamiento con enfoque humano.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-500">
          © 2025 Dra. Haymar Marcano Millán — Pediatría.
          <div className="mt-2 flex gap-4">
            <Link href="/consulta" className="hover:text-slate-700">
              Consulta
            </Link>
            <Link href="/contacto" className="hover:text-slate-700">
              Contacto
            </Link>
            <a
              href="https://wa.me/584248190169"
              className="hover:text-slate-700"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
