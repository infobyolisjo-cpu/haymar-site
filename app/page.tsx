// app/page.tsx
import Link from "next/link";
import Image from "next/image";

const PHONE = "+584248190169";
const WA_MSG =
  "Hola Dra. Haymar, quisiera agendar una consulta.";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
        <div className="order-2 md:order-1">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Cuidado pediátrico con{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              calidez y evidencia
            </span>
            .
          </h1>

          <p className="mt-4 text-lg text-neutral-600">
            Consultas, control del niño sano, nutrición y guía a familias.
            Atención cercana, respetuosa y basada en buenas prácticas.
          </p>

          {/* BOTONES PRINCIPALES */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white shadow hover:bg-emerald-700 focus:outline-none"
            >
              Agendar por WhatsApp
            </a>

            <Link
              href="/consulta"
              className="rounded-xl border border-neutral-300 bg-white px-4 py-3 font-semibold text-neutral-800 shadow-sm hover:border-neutral-400"
            >
              Probar chat educativo
            </Link>

            <Link
              href="/contacto"
              className="rounded-xl bg-neutral-900 px-4 py-3 font-semibold text-white shadow hover:bg-black"
            >
              Escribir mensaje
            </Link>
          </div>

          {/* INFO RAPIDA */}
          <p className="mt-6 text-sm text-neutral-500">
            Tel. +58 424-8190169 · Instagram: @dra.haymarmarcano / @somos_creciendojuntos
          </p>
        </div>

        {/* IMAGEN (pon la foto en /public/dra-haymar-hero.jpg) */}
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
            <Image
              src="/dra-haymar-hero.jpg"
              alt="Dra. Haymar — Pediatra"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold">Servicios</h2>
        <p className="mt-1 text-neutral-600">Atención integral y acompañamiento a familias.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Consulta pediátrica", d: "Evaluación general y seguimiento.", i: "🩺" },
            { t: "Control del niño sano", d: "Crecimiento, desarrollo y consejería.", i: "📈" },
            { t: "Nutrición y lactancia", d: "Apoyo práctico y respetuoso.", i: "🍼" },
            { t: "Vacunación", d: "Calendario y orientación informada.", i: "💉" },
            { t: "Teleconsulta", d: "Orientación inicial y dudas comunes.", i: "💬" },
            { t: "Educación a padres", d: "Herramientas para el día a día.", i: "📚" },
          ].map((s) => (
            <div
              key={s.t}
              className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
            >
              <div className="text-3xl">{s.i}</div>
              <h3 className="mt-2 font-semibold">{s.t}</h3>
              <p className="text-neutral-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE MI */}
      <section className="mx-auto mt-14 max-w-6xl px-4">
        <div className="rounded-2xl bg-neutral-50 p-6 ring-1 ring-black/5">
          <h2 className="text-2xl font-semibold">Sobre mí</h2>
          <p className="mt-2 text-neutral-700">
            Soy la Dra. Haymar Marcano Millán, pediatra. Acompaño a familias con una mirada
            integral, cercana y basada en evidencia. Trabajo en consulta, control del niño sano y
            educación para padres.
          </p>
          <ul className="mt-4 grid gap-2 md:grid-cols-3">
            <li className="rounded-lg bg-white p-3 text-sm shadow ring-1 ring-black/5">
              Comunicación clara y empática.
            </li>
            <li className="rounded-lg bg-white p-3 text-sm shadow ring-1 ring-black/5">
              Respeto por el ritmo de cada familia.
            </li>
            <li className="rounded-lg bg-white p-3 text-sm shadow ring-1 ring-black/5">
              Guías y buenas prácticas actualizadas.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mx-auto my-16 max-w-6xl px-4">
        <div className="grid items-center gap-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 p-6 text-white md:grid-cols-[1fr_auto_auto]">
          <div>
            <h3 className="text-xl font-semibold">¿Listos para agendar?</h3>
            <p className="text-white/90">
              Respuesta rápida por WhatsApp o escríbenos desde el formulario.
            </p>
          </div>

          <a
            href={`https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(WA_MSG)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-4 py-3 font-semibold text-emerald-700 shadow hover:bg-neutral-100"
          >
            WhatsApp
          </a>

          <Link
            href="/contacto"
            className="rounded-xl border-2 border-white/80 px-4 py-3 font-semibold hover:bg-white/10"
          >
            Contacto
          </Link>
        </div>
      </section>
    </>
  );
}
