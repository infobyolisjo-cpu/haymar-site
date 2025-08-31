// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-emerald-50 via-sky-50 to-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          {/* Texto */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Cuidado integral para tu <span className="text-emerald-700">pequeño</span>
            </h1>
            <p className="mt-3 text-slate-700">
              Consultas pediátricas, control del niño sano, nutrición y guía a familias. Atención cercana, respetuosa y
              basada en evidencia.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-emerald-700"
                href="https://wa.me/584248190169?text=Hola%20Dra.%20Haymar%2C%20quisiera%20agendar%20consulta"
                target="_blank"
              >
                Agendar por WhatsApp
              </a>
              <Link
                className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-800 hover:border-slate-400"
                href="/consulta"
              >
                Probar chat educativo
              </Link>
              <Link
                className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-800 hover:border-slate-400"
                href="/contacto"
              >
                Escribir mensaje
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Tel. +58 424-8190169 · Instagram: @dra.haymarmarcano / @somos_creciendojuntos
            </p>
          </div>

          {/* Foto */}
          <div className="flex justify-center md:justify-end">
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
              <Image
                src="/dra-haymar-hero.jpg"
                alt="Dra. Haymar Marcano — Pediatra"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* “SERVICIOS” – Tarjetas */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Servicios especializados</h2>
        <p className="mt-2 text-slate-600">
          Atención integral y acompañamiento a familias: prevención, orientación y tratamiento.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Consulta pediátrica", d: "Evaluación general y seguimiento." },
            { t: "Control del niño sano", d: "Crecimiento, desarrollo y consejería." },
            { t: "Nutrición y lactancia", d: "Apoyo práctico y respetuoso." },
            { t: "Vacunación", d: "Calendario y orientación informada." },
            { t: "Teleconsulta", d: "Orientación inicial y dudas comunes." },
            { t: "Educación a padres", d: "Herramientas para el día a día." },
          ].map((card) => (
            <div
              key={card.t}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="font-semibold text-slate-900">{card.t}</h3>
              <p className="mt-1 text-sm text-slate-600">{card.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Sobre la Dra. Haymar Marcano</h2>
            <p className="mt-2 max-w-3xl text-slate-700">
              Pediatra enfocada en el cuidado integral de la salud infantil. Comunicación clara y empática, respeto por
              el ritmo de cada familia y prácticas basadas en evidencia.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <li className="rounded-lg bg-emerald-50 px-4 py-3 text-emerald-800">
                ✔ Atención personalizada con enfoque humano
              </li>
              <li className="rounded-lg bg-sky-50 px-4 py-3 text-sky-800">✔ Trabajo en equipo con las familias</li>
              <li className="rounded-lg bg-violet-50 px-4 py-3 text-violet-800">✔ Prevención primero</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA CONTACTO */}
      <section className="bg-gradient-to-r from-sky-50 to-emerald-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">¿Agendamos tu consulta?</h3>
              <p className="mt-1 text-slate-600">
                Escríbeme por WhatsApp o envíame un mensaje desde la web. ¡Con gusto te ayudo!
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-emerald-700"
                href="https://wa.me/584248190169?text=Hola%20Dra.%20Haymar%2C%20quisiera%20agendar%20consulta"
                target="_blank"
              >
                WhatsApp
              </a>
              <Link
                className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-800 hover:border-slate-400"
                href="/contacto"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

