function Card({ children }) {
  return (
    <div style={{ border: "2px solid #333", padding: "15px", margin: "10px", borderRadius: "10px" }}>
      {children}
    </div>
  );
}

export default Card;
