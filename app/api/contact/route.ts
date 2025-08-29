import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const form = await req.formData();
  const payload = {
    nombre: String(form.get('nombre') || ''),
    email: String(form.get('email') || ''),
    telefono: String(form.get('telefono') || ''),
    mensaje: String(form.get('mensaje') || ''),
    receivedAt: new Date().toISOString(),
  };

  // Aquí más adelante: enviar a tu correo, Google Sheet o WhatsApp API.
  console.log('Nuevo contacto:', payload);

  // Redirigimos a una página simple de gracias:
  return NextResponse.redirect(new URL('/contacto?ok=1', req.url), 303);
}
