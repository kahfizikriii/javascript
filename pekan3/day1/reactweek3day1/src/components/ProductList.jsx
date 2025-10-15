import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductList() {
  const { addItem } = useContext(CartContext);

  const products = [
    { id: 1, name: "Buku", price: 20000 },
    { id: 2, name: "Pensil", price: 5000 },
    { id: 3, name: "Pulpen", price: 7000 },
  ];

  return (
    <div>
      <h3>Daftar Produk</h3>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - Rp{p.price}
          <button onClick={() => addItem(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
