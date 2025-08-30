// app/contacto/page.tsx  (Server Component)
export default function ContactoPage({
  searchParams,
}: {
  searchParams?: { ok?: string };
}) {
  const ok = searchParams?.ok === '1';

  return (
    <main style={{ padding: '2rem', maxWidth: 560 }}>
      <h1>Contacto</h1>

      {ok && (
        <p style={{ color: 'green', marginTop: 8 }}>
          ✅ ¡Gracias! Tu mensaje fue enviado.
        </p>
      )}

      <p style={{ marginTop: 8 }}>Escríbenos para más información.</p>

      <form
        action="/api/contact"
        method="post"
        style={{ display: 'grid', gap: 12, marginTop: 16 }}
      >
        <input name="nombre" placeholder="Nombre y Apellido" required />
        <input name="email" type="email" placeholder="Correo" required />
        <input name="telefono" placeholder="Teléfono / WhatsApp" />
        <textarea name="mensaje" placeholder="Tu mensaje" rows={5} required />
        <button
          type="submit"
          style={{
            padding: '10px 14px',
            fontWeight: 700,
            borderRadius: 8,
            border: '1px solid #ddd',
            width: 'fit-content',
          }}
        >
          Enviar
        </button>
      </form>
    </main>
  );
}

