"use client";

import { useState } from "react";

export default function ContactoPage() {
  const [ok, setOk] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOk(true);
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Contacto</h1>
      <p>Escríbenos para más información.</p>

      {ok ? (
        <p style={{ color: "green" }}>✅ Mensaje enviado correctamente.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Tu nombre" required />
          <br />
          <input type="email" placeholder="Tu correo" required />
          <br />
          <textarea placeholder="Tu mensaje" required />
          <br />
          <button
            type="submit"
            style={{
              background: "green",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "8px",
            }}
          >
            Enviar
          </button>
        </form>
      )}
    </main>
  );
}
