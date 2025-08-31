// app/contacto/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const WAPP =
  "https://wa.me/584248190169?text=Hola%20Dra.%20Haymar,%20quisiera%20coordinar%20una%20cita";

export default function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    phone: "",
    email: "",
    message: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("bad");
      setStatus("ok");
      setForm({ parentName: "", childName: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-[calc(100vh-56px)] bg-[#fffefe]">
      <section className="bg-gradient-to-b from-[#d1eaeb]/60 to-[#fffefe] border-b border-slate-200/70">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h1 className="text-2xl md:text-3xl font-bold">Contacto</h1>
          <p className="text-slate-700 mt-1">
            Te responderé a la brevedad. También puedes escribir por WhatsApp.
          </p>
          <div className="mt-3">
            <Link
              href={WAPP}
              target="_blank"
              className="inline-flex items-center rounded-xl bg-[#1b748c] px-5 py-2.5 text-white font-semibold shadow hover:opacity-95"
            >
              WhatsApp directo
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 grid gap-6 md:grid-cols-2">
        {/* Formulario */}
        <div className="rounded-2xl bg-white shadow-[0_10px_24px_rgba(2,12,27,0.06)] ring-1 ring-[#60b0be]/15 p-6">
          <h2 className="font-semibold">Escríbenos</h2>

          {status === "ok" && (
            <div className="mt-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 text-sm">
              ¡Gracias! Tu mensaje fue enviado. Te contactaremos muy pronto.
            </div>
          )}
          {status === "error" && (
            <div className="mt-3 rounded-xl bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
              Ocurrió un error al enviar. Intenta de nuevo o usa WhatsApp.
            </div>
          )}

          <form onSubmit={onSubmit} className="mt-4 grid gap-4">
            <Field
              label="Nombre del Padre/Madre"
              name="parentName"
              value={form.parentName}
              onChange={(v) => setForm((f) => ({ ...f, parentName: v }))}
              placeholder="Tu nombre"
            />
            <Field
              label="Nombre del Niño/a"
              name="childName"
              value={form.childName}
              onChange={(v) => setForm((f) => ({ ...f, childName: v }))}
              placeholder="Nombre del niño/a"
            />
            <Field
              label="Teléfono"
              name="phone"
              value={form.phone}
              onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
              placeholder="+58 ..."
            />
            <Field
              label="Email"
              name="email"
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              placeholder="tucorreo@dominio.com"
              type="email"
            />
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Mensaje</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#60b0be]"
                rows={5}
                placeholder="Cuéntanos brevemente el motivo…"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-xl bg-[#60b0be] px-5 py-3 text-white font-semibold shadow hover:opacity-95 disabled:opacity-50"
            >
              {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>

          <p className="text-xs text-slate-500 mt-3">
            * Este formulario envía a la Dra. Haymar por email. También puedes usar WhatsApp.
          </p>
        </div>

        {/* Datos rápidos */}
        <div className="rounded-2xl bg-gradient-to-br from-[#d1eaeb]/70 to-white p-6 shadow ring-1 ring-slate-200/70">
          <h3 className="font-semibold">Contacto Rápido</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><strong>Teléfono:</strong> <Link href="tel:+584248190169" className="hover:text-[#1b748c]">+58 424-8190169</Link></li>
            <li><strong>Email:</strong> <Link href="mailto:haymarmarcano@gmail.com" className="hover:text-[#1b748c]">haymarmarcano@gmail.com</Link></li>
            <li><strong>Instagram:</strong> <Link href="https://instagram.com/dra.haymarmarcano" target="_blank" className="hover:text-[#1b748c]">@dra.haymarmarcano</Link></li>
            <li><strong>Ubicación:</strong> Lechería, Edo. Anzoátegui</li>
            <li><strong>Horario:</strong> Lun–Vie · 9:00–17:00</li>
          </ul>
          <div className="mt-5">
            <Link href={WAPP} target="_blank" className="inline-flex items-center rounded-xl bg-[#1b748c] px-5 py-3 text-white font-semibold shadow hover:opacity-95">
              WhatsApp directo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* Campo controlado */
function Field({
  label, name, value, onChange, placeholder, type = "text",
}:{
  label:string; name:string; value:string; onChange:(v:string)=>void; placeholder?:string; type?:string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#60b0be]"
      />
    </div>
  );
}


