// app/page.tsx
"use client";

/** CONFIG */
const PHONE_E164 = "+584248190169";                 
const WA_NUMBER = "584248190169";                   
const CONTACT_EMAIL = "haymarmarcano@gmail.com";    
const FORM_EMAIL = "drahaymarmarcano@gmail.com";    
const MAPS_URL = "https://maps.google.com/?q=Consultorio%20Dra%20Haymar"; 
const CHAT_URL = "";                                

const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hola%20Dra.%20Haymar,%20quisiera%20agendar%20una%20consulta%20presencial`;
const TEL_LINK = `tel:${PHONE_E164}`;
const FORM_ENDPOINT = `https://formsubmit.co/${FORM_EMAIL}`;

export default function Home() {
  const pulse = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  const openChat = () => {
    if (CHAT_URL) window.open(CHAT_URL, "_blank", "noopener,noreferrer");
    else alert("El chat aún no está configurado (define CHAT_URL).");
  };

  return (
    <main className="bg-white text-[#0f0f10]">
      {/* NAV */}
      <nav className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#inicio" className="text-lg font-medium tracking-tight">Dra. Haymar</a>
          <ul className="hidden items-center gap-4 sm:flex">
            <li><a href="#inicio" className="nav-link">Inicio</a></li>
            <li><a href="#consulta" className="nav-link">Consulta</a></li>
            <li><a href="#contacto" className="nav-link">Contacto</a></li>
            <li>
              <a href={WA_LINK} className="btn btn-primary btn-pulse" onMouseMove={pulse} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* INICIO */}
      <section id="inicio" className="relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-[#edeaff] blur-3xl" />
          <div className="absolute -right-8 top-24 h-40 w-40 rounded-full bg-[#ffeef2] blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 lg:pt-20">
          <span className="inline-block rounded-full border border-neutral-200 px-3 py-1 text-xs tracking-wide text-[#3a3a3c]">
            Pediatría · Puericultura · Acompañamiento respetuoso
          </span>

          {/* 👇 Aquí está la marca CANARIO */}
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            Cuidado pediátrico — vCANARIO
          </h1>

          <p className="mt-4 max-w-2xl text-[#3a3a3c]">
            Soy la <strong>Dra. Haymar Marcano Millán</strong>, pediatra puericultor en Venezuela.
            Ofrezco <strong>consulta presencial</strong> con orientación clara y respetuosa.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#consulta" className="btn btn-primary btn-pulse" onMouseMove={pulse}>Agendar consulta presencial</a>
            <a href={TEL_LINK} className="btn btn-outline">Llamar</a>
            <a href={MAPS_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">Ubicación</a>
          </div>
        </div>
      </section>

      {/* CONSULTA */}
      <section id="consulta" className="bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Consulta presencial</h2>
          <p className="mt-2 max-w-2xl text-[#3a3a3c]">
            Atención pediátrica presencial. Te indicamos preparación previa por WhatsApp o llamada.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="card-pro p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Consulta Pediátrica</h3>
                  <p className="mt-2 text-[#3a3a3c]">Evaluación clínica, orientación y plan claro. 35–45 min.</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#6d6d70]">Desde</div>
                  <div className="text-2xl font-semibold">USD 45</div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <a href={WA_LINK} className="btn btn-primary btn-pulse" onMouseMove={pulse} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a href={TEL_LINK} className="btn btn-outline">Llamar</a>
              </div>
            </div>

            <div className="card-pro p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">Control de Niño Sano</h3>
                  <p className="mt-2 text-[#3a3a3c]">Seguimiento de crecimiento, desarrollo, vacunas e hitos.</p>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#6d6d70]">Desde</div>
                  <div className="text-2xl font-semibold">USD 45</div>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <a href={WA_LINK} className="btn btn-primary btn-pulse" onMouseMove={pulse} target="_blank" rel="noopener noreferrer">WhatsApp</a>
                <a href={TEL_LINK} className="btn btn-outline">Llamar</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-semibold">Contacto</h2>
        <p className="mt-2 max-w-2xl text-[#3a3a3c]">
          Respondo más rápido por WhatsApp. También puedes llamar o enviarme un mensaje por el formulario.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="card-pro p-6">
            <h3 className="text-lg font-semibold">Preferencias de contacto</h3>
            <ul className="mt-3 space-y-2 text-[#3a3a3c]">
              <li>WhatsApp: <a className="hover:underline" href={WA_LINK} target="_blank" rel="noopener noreferrer">{WA_NUMBER}</a></li>
              <li>Teléfono: <a className="hover:underline" href={TEL_LINK}>{PHONE_E164}</a></li>
              <li>Correo: <a className="hover:underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
              <li>Ubicación: <a className="hover:underline" href={MAPS_URL} target="_blank" rel="noopener noreferrer">Ver en Google Maps</a></li>
            </ul>
          </div>

          <div className="card-pro p-6">
            <h3 className="text-lg font-semibold">Formulario</h3>
            <form className="mt-4 grid gap-3" action={FORM_ENDPOINT} method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Nuevo mensaje (Sitio web)" />
              <input type="hidden" name="_template" value="table" />
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3" name="Nombre" placeholder="Nombre y apellido" required />
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3" type="email" name="Correo" placeholder="Correo" required />
              <input className="w-full rounded-xl border border-neutral-300 px-4 py-3" name="Teléfono" placeholder="Teléfono / WhatsApp" />
              <textarea className="min-h-[110px] w-full rounded-xl border border-neutral-300 px-4 py-3" name="Mensaje" placeholder="Tu mensaje" required />
              <button type="submit" className="btn btn-primary btn-pulse" onMouseMove={pulse}>Enviar</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-[#3a3a3c] md:flex-row">
          <div>© {new Date().getFullYear()} Dra. Haymar Marcano Millán — Pediatría</div>
          <div className="flex items-center gap-4">
            <a href="#inicio" className="hover:underline">Inicio</a>
            <a href="#consulta" className="hover:underline">Consulta</a>
            <a href="#contacto" className="hover:underline">Contacto</a>
          </div>
        </div>
      </footer>
    </main>
  );
}


