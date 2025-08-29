"use client";
import { useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

export default function ConsultaPage() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const next = [...messages, { role: "user", content: input } as Msg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok) throw new Error("bad response");
      const json = await res.json(); // { text: string }
      setMessages((m) => [...m, { role: "assistant", content: json.text }]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", content: "⚠️ Error. Intenta de nuevo." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Chat pediátrico (beta)</h1>
      <p className="text-gray-500">
        Asesoría general educativa. No reemplaza consulta médica presencial ni urgencias.
      </p>

      <div className="border rounded-xl p-4 min-h-[240px] bg-white/5">
        {messages.map((m, i) => (
          <div key={i} className="mb-2 whitespace-pre-wrap">
            <b>{m.role === "user" ? "Tú" : "Dra. Haymar (IA)"}:</b> {m.content}
          </div>
        ))}
        {loading && <div><b>Dra. Haymar (IA):</b> …</div>}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 border rounded-lg px-3 py-2"
          placeholder="Edad, síntomas, tiempo de evolución…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={send}
          disabled={loading}
          className="px-4 py-2 rounded-lg bg-violet-600 text-white font-semibold disabled:opacity-60"
        >
          Enviar
        </button>
      </div>
    </main>
  );
}
