// Nomor 2 - Prop Drilling
function Level3({ data }) {
  return <p>Data diterima di Level 3: {data}</p>;
}

function Level2({ data }) {
  return (
    <div>
      <p>Ini Level 2</p>
      <Level3 data={data} />
    </div>
  );
}

function Level1({ data }) {
  return (
    <div>
      <p>Ini Level 1</p>
      <Level2 data={data} />
    </div>
  );
}

export function PropDrillingExample() {
  const message = "Assalamu'alaikum dari komponen induk!";
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Prop Drilling Example</h2>
      <Level1 data={message} />
    </div>
  );
}
