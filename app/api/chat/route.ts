import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // evita edge mientras probamos

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'Eres la Dra. Haymar, pediatra. Orientación educativa general sin diagnósticos ni recetas. Siempre indica que no reemplaza consulta presencial y ante urgencias acudir a emergencias.',
          },
          { role: 'user', content: message || 'hola' },
        ],
        temperature: 0.3,
      }),
    });

    if (!res.ok) {
      const txt = await res.text();
      console.error('OpenAI error:', txt);
      return NextResponse.json({ message: 'Error al conectar con OpenAI' }, { status: 500 });
    }

    const data = await res.json();
    const output = data.choices?.[0]?.message?.content ?? 'Sin respuesta de OpenAI.';
    return NextResponse.json({ message: output });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ message: 'Error procesando la solicitud' }, { status: 500 });
  }
}

