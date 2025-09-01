"use client";

/** CONFIG */
const WA_NUMBER = "###########"; // sólo dígitos
const CONTACT_EMAIL = "drahaymarmarcano@gmail.com";
const CHAT_URL = "https://tu-chat-url.ejemplo.com/";
const FORM_ENDPOINT = `https://formsubmit.co/${CONTACT_EMAIL}`;
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hola%20Dra.%20Haymar,%20quisiera%20agendar%20una%20consulta`;

export default function Home() {
  const pulse = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  const openChat = () => {
    if (CHAT_URL && !CHAT_URL.includes("tu-chat-url")) window.open(CHAT_URL, "_blank", "noopener,noreferrer");
    else alert("Configura CHAT_URL con el enlace de tu chat.");
  };

  return (
    <main className="bg-white text-[#0f0f10]">
      {/* NAV */}
      <nav className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#inicio" className="text-lg tracking-tight">Dra. Haymar</a>
          <div className="hidden gap-2 sm:flex">
            <a href="#inicio" className="btn btn-outline">Inicio</a>
            <a href="#consulta" className="btn btn-outline">Consulta</a>
            <a href="#contacto" className="btn btn-outline">Contacto</a>
            <a href={WA_LINK} className="btn btn-primary btn-pulse" onMouseMove={pulse} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </nav>

      {/* INICIO */}
      <section id="inicio" className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-[#edeaff] blur-3xl" />
          <div className="absolute -right-8 top-24 h-40 w-40 rounded-full bg-[#ffeef2] blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 lg:pt-24">
          <span className="inline-block rounded-full border border-neutral-200 px-3 py-1 text-xs tracking-wide text-[#3a3a3c]">
            Pediatría · Puericultura · Acompañamiento respetuoso
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Cuidado pediátrico con ciencia y calidez
          </h1>
          <p className="mt-4 max-w-2xl text-[#3a3a3c]">
            Soy la <strong>Dra. Haymar Marcano Millán</strong>, pediatra puericultor.
            Te acompaño con prevención, guías claras y respeto en cada etapa del desarrollo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#consulta" className="btn btn-primary btn-pulse" onMouseMove={pulse}>Agendar consulta</a>
            <a href="#contacto" className="btn btn-outline">Escríbeme</a>
            <a href={WA_LINK} className="btn btn-outline" target="_blank" rel="noopener noreferrer">WhatsApp directo</a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-[#3a3a3c]">
            <div className="card-pro px-4 py-2">+100 familias acompañadas</div>
            <div className="card-pro px-4 py-2">Enfoque basado en evidencia</div>
            <div className="card-pro px-4 py-2">Atención cercana y respetuosa</div>
          </div>
        </div>
      </section>

      {/* CONSULTA */}
      <section id="consulta" className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Consulta</h2>
          <p className="mt-2 max-w-2xl text-[#3a3a3c]">
            Agenda una consulta online o presencial (según disponibilidad). Recibirás indicaciones previas en tu correo.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: "Consulta pediátrica", price: "USD 45", desc: "Evaluación integral, orientación y plan claro. 35–45 min.", cta: "Agendar por WhatsApp" },
              { name: "Acompañamiento 4 semanas", price: "USD 120", desc: "Seguimiento por WhatsApp + 2 controles. Lactancia, sueño o alimentación.", cta: "Solicitar" },
              { name: "Asesoría BLW / papillas", price: "USD 60", desc: "Introducción de alimentos, menús y checklist de seguridad. Incluye guía PDF.", cta: "Quiero este" }
            ].map((s) => (
              <div key={s.name} className="card-pro p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{s.name}</h3>
                    <p className="mt-2 text-[#3a3a3c]">{s.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[#6d6d70]">Desde</div>
                    <div className="text-2xl font-semibold">{s.price}</div>
                  </div>
                </div>
                <a href={WA_LINK} className="btn btn-primary btn-pulse mt-5 w-full" onMouseMove={pulse} target="_blank" rel="noopener noreferrer">{s.cta}</a>
              </div>
            ))}
          </div>

          <div className="mt-12 card-pro p-6">
            <h3 className="text-xl font-semibold">Agenda por correo</h3>
            <p className="mt-2 text-[#3a3a3c]">
              Completa el formulario y recibirás confirmación en tu correo. También puedes escribir a {CONTACT_EMAIL}.
            </p>
            <form className="mt-6 grid gap-4 md:grid-cols-2" action={FORM_ENDPOINT} method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Nueva solicitud de consulta (sitio web)" />
              <input type="hidden" name="_template" value="table" />
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0f0f10]" name="Nombre" placeholder="Nombre y apellido" required />
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0f0f10]" type="email" name="Correo" placeholder="Correo electrónico" required />
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0f0f10]" name="Teléfono" placeholder="Teléfono / WhatsApp" />
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0f0f10]" name="Edad del bebé" placeholder="Edad del bebé" />
              <textarea className="md:col-span-2 min-h-[120px] w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0f0f10]" name="Motivo" placeholder="Cuéntame brevemente tu necesidad" required />
              <button type="submit" className="btn btn-primary btn-pulse md:col-span-2" onMouseMove={pulse}>Enviar solicitud</button>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Contacto</h2>
        <p className="mt-2 max-w-2xl text-[#3a3a3c]">
          Respondo más rápido por WhatsApp. También puedes usar el formulario o el chat.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="card-pro p-6">
            <h3 className="text-lg font-semibold">Escríbeme</h3>
            <p className="mt-2 text-[#3a3a3c]"><a className="hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={WA_LINK} className="btn btn-primary btn-pulse" onMouseMove={pulse} target="_blank" rel="noopener noreferrer">WhatsApp</a>
              <button onClick={openChat} className="btn btn-outline">Abrir chat</button>
            </div>
          </div>

          <div className="card-pro p-6">
            <h3 className="text-lg font-semibold">Formulario corto</h3>
            <form className="mt-4 grid gap-3" action={FORM_ENDPOINT} method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Nuevo mensaje (Contacto)" />
              <input type="hidden" name="_template" value="table" />
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0f0f10]" name="Nombre" placeholder="Nombre" required />
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0f0f10]" type="email" name="Correo" placeholder="Correo" required />
              <textarea className="min-h-[100px] w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#0f0f10]" name="Mensaje" placeholder="Tu mensaje" required />
              <button type="submit" className="btn btn-primary btn-pulse" onMouseMove={pulse}>Enviar</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-[#3a3a3c] md:flex-row">
          <div>© {new Date().getFullYear()} Dra. Haymar Marcano Millán</div>
          <div className="flex items-center gap-4">
            <a href="#inicio" className="hover:underline">Inicio</a>
            <a href="#consulta" className="hover:underline">Consulta</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </div>
        </div>
      </footer>

      {/* FABs */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col gap-2">
        <a href={WA_LINK} className="rounded-full bg-[#0f0f10] px-4 py-3 text-white shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:opacity-90" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <button onClick={openChat} className="rounded-full border border-neutral-300 bg-white px-4 py-3 text-[#0f0f10] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:bg-neutral-50">Chat</button>
      </div>
    </main>
  );
}
