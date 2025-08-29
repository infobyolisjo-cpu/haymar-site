'use client';

export default function WhatsAppButton() {
  const href = 'https://wa.me/584248190169?text=Hola%20Dra.%20Haymar%2C%20deseo%20agendar%20una%20consulta.';
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center px-4 py-2 rounded-lg bg-green-500 text-white font-semibold"
    >
      WhatsApp
    </a>
  );
}
