"use client";
import { useState } from "react";

export default function ContactoPage(){
  const [status, setStatus] = useState<string>("");

  async function onSubmit(e: React.FormEvent){
    e.preventDefault();
    setStatus("");
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form).entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(data)
    });

    const json = await res.json().catch(()=>({message:"Error"}));
    setStatus(json.message || "Enviado");
    if(res.ok) form.reset();
  }

  return (
    <main className="p-6 space-y-3">
      <h1 className="text-2xl font-bold">Contacto y reservas</h1>
      <p className="text-gray-500">Escríbeme por WhatsApp o deja tus datos y te contactaré.</p>

      <form onSubmit={onSubmit} className="grid gap-3 max-w-md">
        <input className="border rounded-lg px-3 py-2" name="nombre" placeholder="Tu nombre" required />
        <input className="border rounded-lg px-3 py-2" name="telefono" placeholder="Teléfono" required />
        <input className="border rounded-lg px-3 py-2" type="email" name="email" placeholder="Email" required />
        <textarea className="border rounded-lg px-3 py-2" name="motivo" placeholder="Motivo de consulta" rows={4} required />
        <button className="px-4 py-2 rounded-lg bg-violet-600 text-white font-semibold" type="submit">Enviar</button>
        {status && <div className="text-gray-500">{status}</div>}
      </form>

      <div className="mt-4">
        <a
          className="inline-flex items-center px-4 py-2 rounded-lg bg-green-500 text-white font-semibold"
          href={`https://wa.me/584248190169?text=${encodeURIComponent("Hola Dra. Haymar, deseo agendar una consulta para mi hijo/a.")}`}
          target="_blank"
        >
          WhatsApp directo
        </a>
      </div>
    </main>
  );
}
