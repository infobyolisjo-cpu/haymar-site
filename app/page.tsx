import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Dra. Haymar Marcano Millán | Pediatría",
  description:
    "Consultas pediátricas, control del niño sano, orientación a familias y teleconsulta.",
};

export default function HomePage() {
  const wa = "https://wa.me/584248190169?text=Hola%20Dra.%20Haymar%2C%20quisiera%20agendar%20una%20consulta.";

  return (
    <main className="min-h-screen bg-white text-[#0e1012]">
      {/* NAV */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-extrabold text-lg">Dra. Haymar</Link>
          <nav className="flex items-center gap-5 text-[15px]">
            <a href="#servicios" className="hover:underline">Servicios</a>
            <a href="#sobre-mi" className="hover:underline">Sobre mí</a>
            <a href="#faq" className="hover:underline">Preguntas</a>
            <Link href="/consulta" className="font-semibold text-[#0b5fff] hover:underline">Consulta</Link>
            <Link
              href="/contacto"
              className="rounded-lg px-3 py-1.5 bg-[#0b5fff] text-white font-semibold"
            >
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-b from-[#f8fbff] to-white">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Cuidado pediátrico con calidez y evidencia.
            </h1>
            <p className="mt-4 text-neutral-700 text-lg">
              Consultas pediátricas, control del niño sano, nutrición y guía a familias.
              Atención cercana, respetuosa y basada en buenas prácticas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl px-5 py-3 bg-[#25D366] text-white font-bold shadow hover:shadow-md"
              >
                Agendar por WhatsApp
              </a>
              <Link
                href="/consulta"
                className="rounded-xl px-5 py-3 border border-neutral-300 font-semibold hover:bg-neutral-50"
              >
                Probar chat educativo
              </Link>
              <Link
                href="/contacto"
                className="rounded-xl px-5 py-3 border border-neutral-300 font-semibold hover:bg-neutral-50"
              >
                Escribir mensaje
              </Link>
            </div>

            <div className="mt-5 text-sm text-neutral-600">
              Tel. <a className="underline" href="tel:+584248190169">+58 424-8190169</a> ·
              Instagram:{" "}
              <a className="underline" target="_blank" rel="noopener noreferrer" href="https://instagram.com/dra.haymarmarcano">
                @dra.haymarmarcano
              </a>{" "}
              /{" "}
              <a className="underline" target="_blank" rel="noopener noreferrer" href="https://instagram.com/somos_creciendojuntos">
                @somos_creciendojuntos
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            {/* Reemplaza /dra-haymar.jpg cuando tengas la foto en /public */}
            <div className="relative w-[320px] h-[420px] rounded-2xl overflow-hidden shadow-lg ring-1 ring-neutral-200">
              <Image
                src="/dra-haymar.jpg"
                alt="Dra. Haymar Marcano Millán"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-extrabold">Servicios</h2>
        <p className="mt-2 text-neutral-700">
          Atención integral y acompañamiento a familias.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "Consulta pediátrica", d: "Evaluación general y seguimiento." },
            { t: "Control del niño sano", d: "Crecimiento, desarrollo y consejería." },
            { t: "Nutrición y lactancia", d: "Apoyo práctico y respetuoso." },
            { t: "Vacunación", d: "Calendario y orientación informada." },
            { t: "Teleconsulta", d: "Orientación inicial y dudas comunes." },
            { t: "Educación a padres", d: "Herramientas para el día a día." },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 p-5 hover:shadow-sm bg-white"
            >
              <h3 className="font-bold">{c.t}</h3>
              <p className="mt-2 text-neutral-700 text-sm">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE MI */}
      <section id="sobre-mi" className="bg-[#fafbfc]">
        <div className="mx-auto max-w-6xl px-4 py-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Sobre mí</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Soy la <strong>Dra. Haymar Marcano Millán</strong>, pediatra. Acompaño a familias
              con una mirada integral, cercana y basada en evidencia.
              Trabajo en consulta, control del niño sano y educación para padres.
            </p>
            <ul className="mt-4 list-disc pl-5 text-neutral-700">
              <li>Comunicación clara y empática.</li>
              <li>Respeto por el ritmo de cada familia.</li>
              <li>Guías y buenas prácticas actualizadas.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
            <h3 className="font-bold">Información rápida</h3>
            <div className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-[#f6f7f9] p-3">
                <p className="font-semibold">WhatsApp</p>
                <a className="underline" href={wa} target="_blank" rel="noopener noreferrer">
                  +58 424-8190169
                </a>
              </div>
              <div className="rounded-lg bg-[#f6f7f9] p-3">
                <p className="font-semibold">Email</p>
                <a className="underline" href="mailto:haymarmarcano@gmail.com">
                  haymarmarcano@gmail.com
                </a>
              </div>
              <div className="rounded-lg bg-[#f6f7f9] p-3">
                <p className="font-semibold">Instagram</p>
                <a className="underline" href="https://instagram.com/dra.haymarmarcano" target="_blank" rel="noopener noreferrer">
                  @dra.haymarmarcano
                </a>
              </div>
              <div className="rounded-lg bg-[#f6f7f9] p-3">
                <p className="font-semibold">Educación</p>
                <span>Orientación a familias y desarrollo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS (placeholder) */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-extrabold">Lo que dicen las familias</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            "Excelente trato y explicaciones claras.",
            "Nos acompañó con paciencia en la lactancia.",
            "Gran profesional y muy humana.",
          ].map((t, i) => (
            <figure key={i} className="rounded-2xl border border-neutral-200 p-5 bg-white">
              <blockquote className="text-neutral-700">“{t}”</blockquote>
              <figcaption className="mt-3 text-sm text-neutral-500">Familia atendida</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-extrabold">Preguntas frecuentes</h2>
        <div className="mt-6 space-y-3">
          {[
            {
              q: "¿El chat sustituye la consulta?",
              a: "No. El chat es educativo. No reemplaza la consulta médica presencial ni urgencias.",
            },
            {
              q: "¿Ofrece teleconsulta?",
              a: "Sí, para orientación inicial. Para evaluación clínica completa, se recomienda consulta presencial.",
            },
            {
              q: "¿Cómo saco cita?",
              a: "Escríbeme por WhatsApp para coordinar horario y modalidad.",
            },
          ].map((f, i) => (
            <details key={i} className="rounded-xl border border-neutral-200 bg-white p-4">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-neutral-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 py-8 text-sm text-neutral-600">
        <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Dra. Haymar Marcano Millán — Pediatría.</p>
          <div className="flex items-center gap-4">
            <Link href="/consulta" className="hover:underline">Consulta</Link>
            <Link href="/contacto" className="hover:underline">Contacto</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:underline">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
