import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Aquí integramos con Formspree o servicio similar
    await fetch("https://formspree.io/f/tu_endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message }),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Error enviando formulario" }, { status: 500 });
  }
}
