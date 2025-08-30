'use client';
import { useState } from 'react';

export default function ConsultaPage() {
  const [prompt, setPrompt] = useState('');
  const [out, setOut] = useState<string>('');
  const [loading, setLoading] = useState(false);

  async function enviar() {
    setLoading(true);
    setOut('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt || 'hola mi bebé tiene fiebre' }),
      });
      const data = await res.json();
      setOut(data.message ?? 'Sin respuesta');
    } catch {
      setOut('No pude contactar el servicio. Revisa tu conexión.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: '2rem', maxWidth: 720 }}>
      <h1>Consulta en línea <small style={{fontSize:12,color:'#888'}}>v2</small></h1>
      <p>Bienvenida/o, aquí puedes probar el chat pediátrico educativo.</p>

      <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
          placeholder="Edad, peso, temperatura, síntomas, tiempo con fiebre…"
          style={{ padding: 12, borderRadius: 8, border: '1px solid #ddd' }}
        />
        <button
          onClick={enviar}
          disabled={loading}
          style={{
            background: '#0b5fff',
            color: 'white',
            padding: '10px 14px',
            borderRadius: 8,
            border: 'none',
            fontWeight: 700,
            cursor: 'pointer',
            opacity: loading ? 0.6 : 1,
            width: 'fit-content',
          }}
        >
          {loading ? 'Consultando…' : 'Enviar'}
        </button>
      </div>

      {out && (
        <pre
          style={{
            background: '#f7f7f8',
            padding: 12,
            borderRadius: 8,
            marginTop: 16,
            whiteSpace: 'pre-wrap',
          }}
        >
          {out}
        </pre>
      )}

      <p style={{ marginTop: 16, fontSize: 13, color: '#666' }}>
        * Orientación educativa. No reemplaza consulta médica presencial ni urgencias.
      </p>
    </main>
  );
}

