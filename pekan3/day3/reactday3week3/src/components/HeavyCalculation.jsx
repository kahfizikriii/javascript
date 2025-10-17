import { useMemo, useState } from "react";

function HeavyCalculation() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const expensiveCalculation = (num) => {
    console.log(" Perhitungan berat dijalankan...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += num * 2;
    }
    return result;
  };

  const calculatedValue = useMemo(() => expensiveCalculation(number), [number]);

  return (
    <div style={{ padding: 20 }}>
      <h2>useMemo Demo</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <input
        type="text"
        placeholder="Ketik sesuatu..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Hasil perhitungan: {calculatedValue}</p>
    </div>
  );
}

export default HeavyCalculation;
