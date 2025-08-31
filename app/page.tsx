"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Phone, Mail, MapPin, Heart, Users, Shield, Clock } from "lucide-react";

export default function Landing() {
  // enlaces útiles
  const WAPP = "https://wa.me/584248190169?text=Hola%20Dra.%20quisiera%20agendar%20una%20consulta";
  const MAIL = "mailto:haymarmarcano@gmail.com";
  const IG   = "https://instagram.com/dra.haymarmarcano";

  return (
    <main className="bg-offwhite">
      {/* HEADER fijo simple */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-teal text-white grid place-items-center shadow-soft">
              <Heart size={18}/>
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Dra. Haymar Marcano</div>
              <div className="text-xs text-slate-500">Pediatría · Puericultura</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#inicio" className="hover:text-primary">Inicio</a>
            <a href="#servicios" className="hover:text-primary">Servicios</a>
            <a href="#sobre-mi" className="hover:text-primary">Sobre mí</a>
            <a href="#contacto" className="hover:text-primary">Contacto</a>
          </nav>

          <Link href={WAPP} target="_blank" className="btn btn-teal">
            <Calendar className="mr-2 h-4 w-4"/> Agendar Cita
          </Link>
        </div>
      </header>

      {/* HERO — claro, balanceado, con imagen sin fondo contenida */}
      <section id="inicio" className="relative overflow-hidden">
        {/* blobs suaves de fondo */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-mint blur-3xl opacity-60" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-teal blur-3xl opacity-30" />

        <div className="container grid lg:grid-cols-2 gap-10 py-12 md:py-16 items-center">
          {/* copy */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-primary/80">Pediatría • Puericultura</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Cuidado Integral para <span className="grad-title">tu Pequeño</span>
            </h1>
            <p className="text-slate-600">
              Atención pediátrica con calidez y evidencia: control del niño sano, nutrición y acompañamiento cercano a familias.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href={WAPP} target="_blank" className="btn btn-primary">
                Agendar Consulta
              </Link>
              <Link href="tel:+584248190169" className="btn btn-ghost">
                <Phone className="h-4 w-4 mr-2"/> Llamar Ahora
              </Link>
              <Link href="/consulta" className="btn btn-teal">
                Probar chat educativo
              </Link>
            </div>

            {/* métricas */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-md">
              <Stat number="10+" label="Años de Experiencia"/>
              <Stat number="1000+" label="Niños Atendidos"/>
              <Stat number="24/7" label="Disponibilidad"/>
            </div>
          </div>

          {/* imagen sin fondo, contenida */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 to-teal/10 blur-2xl" />
            <Image
              src="/dra-haymar-hero.png"
              alt="Dra. Haymar – Pediatra"
              width={640}
              height={800}
              priority
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="container py-14 md:py-16">
        <h2 className="text-3xl font-bold text-center">Servicios Especializados</h2>
        <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">
          Ofrezco atención integral para el cuidado y desarrollo saludable de tu hijo.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <ServiceCard
            tone="from-mint to-white"
            icon={<Heart className="h-5 w-5" />}
            title="Consultas Pediátricas"
            points={["Control del niño sano","Tratamiento de enfermedades","Seguimiento del crecimiento"]}
          />
          <ServiceCard
            tone="from-teal/20 to-white"
            icon={<Users className="h-5 w-5" />}
            title="Puericultura"
            points={["Alimentación y lactancia","Hábitos saludables","Prevención"]}
          />
          <ServiceCard
            tone="from-orange/25 to-white"
            icon={<Shield className="h-5 w-5" />}
            title="Vacunación"
            points={["Esquema oficial","Vacunas adicionales","Orientación informada"]}
          />
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="bg-white">
        <div className="container py-14 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-3">Sobre la Dra. Haymar Marcano</h2>
            <p className="text-slate-600">
              Pediatra y puericultor dedicada al cuidado integral de la salud infantil.
              Acompaño a familias con una comunicación clara, respetuosa y basada en evidencia.
            </p>

            <ul className="mt-6 space-y-4">
              <AboutItem icon={<Heart className="h-4 w-4 text-primary"/>} title="Atención Personalizada"
                         desc="Cada niño es único; adapto el cuidado a sus necesidades." />
              <AboutItem icon={<Users className="h-4 w-4 text-teal"/>} title="Trabajo con la Familia"
                         desc="Colaboro con padres para crear planes de cuidado integrales." />
              <AboutItem icon={<Shield className="h-4 w-4 text-orange"/>} title="Prevención Primero"
                         desc="Me enfoco en crecimiento saludable y hábitos preventivos." />
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-teal/15 to-primary/10 blur-2xl" />
            <Image
              src="/dra-haymar-hero.png"  // puedes poner otra si quieres
              alt="Consulta pediátrica"
              width={560}
              height={700}
              className="w-full h-auto rounded-2xl object-cover shadow-soft"
            />
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur rounded-xl px-4 py-2 shadow-soft text-sm flex items-center gap-2">
              <Heart className="h-4 w-4 text-primary"/> 5.0 · Pacientes felices
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-gradient-to-b from-offwhite to-mint/40">
        <div className="container py-14 md:py-16">
          <h2 className="text-3xl font-bold text-center">Agenda tu Consulta</h2>
          <p className="text-center text-slate-600 mt-2 max-w-2xl mx-auto">
            Estoy aquí para cuidar la salud de tu hijo. Escríbeme para coordinar tu cita.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {/* tarjeta datos */}
            <div className="card bg-gradient-to-br from-mint/60 to-white">
              <h3 className="font-semibold mb-4">Información de Contacto</h3>
              <ContactLine icon={<Phone className="h-4 w-4"/>}   label="Teléfono" value="+58 424-8190169" href="tel:+584248190169"/>
              <ContactLine icon={<Mail className="h-4 w-4"/>}    label="Email"    value="haymarmarcano@gmail.com" href={MAIL}/>
              <ContactLine icon={<MapPin className="h-4 w-4"/>}  label="Ubicación" value="Lechería, Edo. Anzoátegui" />
              <ContactLine icon={<Clock className="h-4 w-4"/>}   label="Horarios" value="Lun–Vie · 9:00–17:00" />
            </div>

            {/* CTA rápida */}
            <div className="card bg-gradient-to-tr from-primary/10 to-teal/20 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold mb-2">Solicitud rápida</h3>
                <p className="text-sm text-slate-600">
                  Prefieres un mensaje directo: WhatsApp o correo.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={WAPP} target="_blank" className="btn btn-primary">WhatsApp</Link>
                <Link href={MAIL}  className="btn btn-ghost">Escribir Email</Link>
                <Link href={IG}    target="_blank" className="btn btn-teal">Instagram</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-200">
        <div className="container py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-teal grid place-items-center">
                <Heart size={16} className="text-white"/>
              </div>
              <span className="font-semibold">Dra. Haymar Marcano</span>
            </div>
            <p className="text-sm text-slate-400 mt-3">
              Cuidado integral de la salud infantil con calidez, profesionalismo y evidencia.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Servicios</h4>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>Consultas Pediátricas</li>
              <li>Puericultura</li>
              <li>Vacunación</li>
              <li>Control del Niño Sano</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contacto</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="tel:+584248190169" className="hover:text-white">+58 424-8190169</Link></li>
              <li><Link href={MAIL} className="hover:text-white">haymarmarcano@gmail.com</Link></li>
              <li><Link href={IG} target="_blank" className="hover:text-white">@dra.haymarmarcano</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container py-5 text-xs text-slate-400">
            © 2025 Dra. Haymar Marcano Millán — Pediatría.
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- subcomponentes ---------- */

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="rounded-xl bg-white/80 backdrop-blur shadow-soft px-4 py-3 text-center">
      <div className="text-xl font-bold text-primary">{number}</div>
      <div className="text-xs text-slate-600">{label}</div>
    </div>
  );
}

function ServiceCard({
  tone,
  icon,
  title,
  points,
}: {
  tone: string;
  icon: React.ReactNode;
  title: string;
  points: string[];
}) {
  return (
    <div className={`card bg-gradient-to-br ${tone}`}>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-white/70 grid place-items-center text-primary">
          {icon}
        </div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
}

function AboutItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="h-7 w-7 rounded-full bg-white grid place-items-center shadow-soft">{icon}</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-slate-600">{desc}</div>
      </div>
    </li>
  );
}

function ContactLine({ icon, label, value, href }:{
  icon: React.ReactNode; label:string; value:string; href?:string;
}) {
  const content = (
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-full bg-white/70 grid place-items-center text-primary">{icon}</div>
      <div>
        <div className="text-xs text-slate-500">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <Link href={href} className="block py-2">{content}</Link> : <div className="py-2">{content}</div>;
}
