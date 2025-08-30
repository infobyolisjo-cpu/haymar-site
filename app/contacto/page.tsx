"use client";
import { useSearchParams } from "next/navigation";

export default function ContactoPage() {
  const sp = useSearchParams();
  const ok = sp.get("ok") === "1";

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Contacto</h1>

      {ok && <p style={{ color: "green" }}>✅ ¡Gracias! Tu mensaje fue enviado.</p>}

      <form action="/api/contact" method="post" style={{ display: "grid", gap: 12, maxWidth: 480 }}>
        <input name="nombre" placeholder="Nombre y Apellido" required />
        <input name="email" type="email" placeholder="Correo" required />
        <input name="telefono" placeholder="Teléfono / WhatsApp" />
        <textarea name="mensaje" placeholder="Cuéntanos tu caso" rows={5} required />
        <button type="submit" style={{ padding: "10px 14px", fontWeight: 700, borderRadius: 8, border: "1px solid #ddd" }}>
          Enviar
        </button>
      </form>
    </main>
  );
}
