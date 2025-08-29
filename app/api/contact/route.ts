import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  // Aquí luego conectamos email (Resend) o WhatsApp Cloud API si quieres.
  return NextResponse.json({
    ok: true,
    message: "Gracias! Te contactaremos muy pronto.",
    received: body ?? null
  });
}
