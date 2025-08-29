import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = "nodejs"; // evita problemas con 'edge' mientras probamos

const system = `Eres la Dra. Haymar Marcano Millán, pediatra. Ofrece orientación general basada en evidencia.
- Incluye siempre: "Esta información es educativa y no reemplaza consulta médica. Ante urgencias, acuda a un servicio de emergencia."
- Sé empática y clara. Pide datos clave (edad, peso, síntomas, tiempo de evolución).
- No diagnostiques ni prescribas fármacos específicos. Indica cuándo consultar presencialmente.`;

export async function POST(req: NextRequest) {
  try {
    // leemos los mensajes que envía el frontend
    const { messages = [] } = await req.json();

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    // usamos chat.completions (simple y estable)
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      messages: [
        { role: "system", content: system },
        // messages debe ser array de objetos: { role: 'user'|'assistant', content: string }
        ...messages
      ],
    });

    const text =
      completion.choices?.[0]?.message?.content ??
      "Lo siento, no pude generar respuesta.";

    return NextResponse.json({ text });
  } catch (err: any) {
    console.error("API /api/chat error:", err?.message || err);
    return NextResponse.json({ error: "Error en el servidor" }, { status: 500 });
  }
}
