'use client';

export default function WhatsAppButton() {
  const href =
    'https://wa.me/584248190169?text=Hola%20Dra.%20Haymar%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.';
  return (
    <a className="whatsapp-fab" href={href} target="_blank" rel="noreferrer">
      WhatsApp
    </a>
  );
}
