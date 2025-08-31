// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-brand-mint via-white to-brand-mint/40">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-12 md:grid-cols-2 md:py-16">
          {/* Texto */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Cuidado pediátrico con{" "}
              <span className="text-brand-teal">calidez y evidencia</span>.
            </h1>
            <p className="mt-3 text-slate-700">
              Consultas, control del niño sano, nutrición y guía a familias.
              Atención cercana, respetuosa y basada en buenas prácticas.
            </p>

            {/* CTAs separados */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 md:flex md:flex-wrap">
              <a
                className="rounded-xl bg-brand-teal px-5 py-3 text-center font-medium text-white shadow-soft hover:bg-brand-aqua"
                href="https://wa.me/584248190169?text=Hola%20Dra.%20Haymar%2C%20quisiera%20agendar%20consulta"
                target="_blank"
              >
                Agendar por WhatsApp
              </a>
              <Link
                className="rounded-xl border border-slate-300 px-5 py-3 text-center font-medium text-slate-800 hover:border-brand-aqua"
                href="/consulta"
              >
                Probar chat educativo
              </Link>
              <Link
                className="rounded-xl border border-slate-300 px-5 py-3 text-center font-medium text-slate-800 hover:border-brand-aqua"
                href="/contacto"
              >
                Escribir mensaje
              </Link>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Tel. +58 424-8190169 · Instagram: @dra.haymarmarcano / @somos_creciendojuntos
            </p>
          </div>

          {/* Foto (más pequeña e integrada) */}
          <div className="relative mx-auto w-full max-w-xs">
            {/* halo de color detrás */}
            <div className="absolute -inset-3 rounded-full bg-brand-aqua/20 blur-2xl" aria-hidden />
            <div className="relative aspect-square overflow-hidden rounded-full border border-slate-200 bg-white shadow-soft">
              <Image
                src="/dra-haymar-hero.jpg"
                alt="Dra. Haymar Marcano — Pediatra"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm text-slate-500">Dra. Haymar Marcano Millán — Pediatra</p>
          </div>
        </div>
      </section>

      {/* MÉTRICAS / SELLOS */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { n: "10+", t: "Años de experiencia", c: "bg-brand-mint text-brand-teal" },
            { n: "1000+", t: "Niños atendidos", c: "bg-brand-aqua/10 text-brand-teal" },
            { n: "24/7", t: "Disponibilidad", c: "bg-orange-50 text-amber-800" },
          ].map((i) => (
            <div key={i.t} className={`rounded-xl ${i.c} px-5 py-4 text-center`}>
              <div className="text-2xl font-bold">{i.n}</div>
              <div className="text-sm">{i.t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Servicios especializados</h2>
        <p className="mt-2 text-slate-600">
          Atención integral y acompañamiento a familias: prevención, orientación y tratamiento.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md">
            <div className="mb-3 inline-flex rounded-full bg-brand-aqua/10 px-3 py-1 text-sm text-brand-teal">Consulta</div>
            <h3 className="font-semibold text-slate-900">Consultas pediátricas</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Control del niño sano</li>
              <li>Tratamiento de enfermedades</li>
              <li>Seguimiento del crecimiento</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md">
            <div className="mb-3 inline-flex rounded-full bg-brand-mint px-3 py-1 text-sm text-brand-teal">Puericultura</div>
            <h3 className="font-semibold text-slate-900">Orientación a padres</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Alimentación y lactancia</li>
              <li>Pautas de higiene</li>
              <li>Prevención de enfermedades</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md">
            <div className="mb-3 inline-flex rounded-full bg-orange-50 px-3 py-1 text-sm text-amber-800">Vacunación</div>
            <h3 className="font-semibold text-slate-900">Esquema y seguimiento</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Calendario nacional</li>
              <li>Vacunas adicionales</li>
              <li>Consejería informada</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-12 bg-gradient-to-r from-brand-aqua/10 to-brand-mint">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">¿Agendamos tu consulta?</h3>
              <p className="mt-1 text-slate-600">El canal más rápido es WhatsApp; también puedes escribir desde la web.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                className="rounded-xl bg-brand-teal px-5 py-3 text-center font-medium text-white shadow-soft hover:bg-brand-aqua"
                href="https://wa.me/584248190169?text=Hola%20Dra.%20Haymar%2C%20quisiera%20agendar%20consulta"
                target="_blank"
              >
                WhatsApp
              </a>
              <Link
                className="rounded-xl border border-slate-300 px-5 py-3 text-center font-medium text-slate-800 hover:border-brand-aqua"
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

