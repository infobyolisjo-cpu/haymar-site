export default function ContactoPage() {
  return (
    <>
      <h1>Contacto</h1>
      <form action="/api/contact" method="post" style={{display:'grid', gap:12, maxWidth:480}}>
        <input name="nombre" placeholder="Nombre y Apellido" required />
        <input name="email" type="email" placeholder="Correo" required />
        <input name="telefono" placeholder="Teléfono / WhatsApp" />
        <textarea name="mensaje" placeholder="Cuéntanos tu caso" rows={5} required />
        <button type="submit" style={{padding:'10px 14px', fontWeight:700, borderRadius:8, border:'1px solid #ddd'}}>
          Enviar
        </button>
      </form>
    </>
  );
}
