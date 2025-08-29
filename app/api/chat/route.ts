import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  // Placeholder inicial. Más adelante conectamos con OpenAI.
  const { message } = await req.json().catch(() => ({ message: '' }));
  return NextResponse.json({
    ok: true,
    message:
      'Chat aún no configurado. (Versión mínima OK)\n\n' +
      'Ejemplo:\nTú: ' + (message || 'hola mi bebé tiene fiebre') + '\n' +
      'Dra. Haymar (IA): Para orientarte mejor necesito: edad, peso, temperatura, tiempo con fiebre y otros síntomas.',
  });
}
