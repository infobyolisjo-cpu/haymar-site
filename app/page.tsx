// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-r from-emerald-50 to-sky-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
          {/* Texto */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Cuidado pediátrico con{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                calidez y evidencia
              </span>.
            </h1>
            <p className="mt-4 text-lg text-neutral-600">
              Consultas, control del niño sano, nutrición y guía a familias.  
              Atención cercana, respetuosa y basada en buenas prácticas.
            </p>

            {/* BOTONES */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="https://wa.me/584248190169?text=Hola%20Dra.%20Haymar%2C%20quisiera%20agendar%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow hover:bg-emerald-700"
              >
                Agendar por WhatsApp
              </a>
              <Link
                href="/consulta"
                className="rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white shadow hover:bg-sky-700"
              >
                Probar chat educativo
              </Link>
              <Link
                href="/contacto"
                className="rounded-xl bg-neutral-900 px-6 py-3 font-semibold text-white shadow hover:bg-black"
              >
                Escribir mensaje
              </Link>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <Image
                src="/dra-haymar-hero.jpg"
                alt="Dra. Haymar Marcano Millán — Pediatra"
                fill
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
