// Nomor 3 - Shared State antar Sibling
import { useState } from "react";

function KomponenA({ text, onChange }) {
  return (
    <div>
      <h3>Komponen A</h3>
      <input
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Ketik sesuatu..."
      />
    </div>
  );
}

function KomponenB({ text }) {
  return (
    <div>
      <h3>Komponen B</h3>
      <p>Teks dari Komponen A: {text}</p>
    </div>
  );
}

export function SharedStateExample() {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Shared State antar Komponen</h2>
      <KomponenA text={text} onChange={setText} />
      <KomponenB text={text} />
    </div>
  );
}
