import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const nombre = String(form.get("nombre") || "");
    const email = String(form.get("email") || "");
    const telefono = String(form.get("telefono") || "");
    const mensaje = String(form.get("mensaje") || "");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Web Dra Haymar <onboarding@resend.dev>",
        to: ["drahaymarmarcano@gmail.com"],
        subject: "Nuevo contacto desde la web",
        html: `
          <h2>Nuevo contacto</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Mensaje:</strong><br/>${mensaje}</p>
        `,
      }),
    });

    if (!res.ok) {
      const txt = await res.text();
      console.error("Resend error:", txt);
      return NextResponse.json({ ok: false, error: "No se pudo enviar el correo" }, { status: 500 });
    }

    return NextResponse.redirect(new URL("/contacto?ok=1", req.url), 303);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "Error en el servidor" }, { status: 500 });
  }
}
