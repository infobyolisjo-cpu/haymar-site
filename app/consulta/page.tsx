'use client';

import { useState } from 'react';

export default function ConsultaPage() {
  const [out, setOut] = useState<string>('');

  async function probar() {
    try {
      const res = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message: 'hola' }) });
      const data = await res.json();
      setOut(data.message ?? 'Sin respuesta');
    } catch {
      setOut('Chat aún no configurado. (Versión mínima OK)');
    }
  }

  return (
    <>
      <h1>Consulta</h1>
      <p>Asistente educativo pediátrico (beta).</p>
      <button onClick={probar} style={{padding:'10px 14px', fontWeight:700, borderRadius:8, border:'1px solid #ddd'}}>
        Probar chat
      </button>
      {out && <pre style={{background:'#f7f7f8', padding:12, borderRadius:8, marginTop:12}}>{out}</pre>}
    </>
  );
}
