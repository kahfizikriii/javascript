import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartDisplay() {
  const { cart, removeItem, clearCart, total } = useContext(CartContext);

  return (
    <div>
      <h3>Keranjang Belanja</h3>
      {cart.length === 0 && <p>Belum ada item di keranjang.</p>}
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - Rp{item.price}
          <button onClick={() => removeItem(item.id)}>Hapus</button>
        </div>
      ))}
      <p>Total: Rp{total}</p>
      {cart.length > 0 && <button onClick={clearCart}>Kosongkan</button>}
    </div>
  );
}
