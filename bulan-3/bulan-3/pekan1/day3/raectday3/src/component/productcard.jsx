import react from "react";
import PropTypes from "prop-types";

// Komponen ProductCard
function ProductCard({ productName, price, stock, isAvailable }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "12px", margin: "10px", borderRadius: "8px" }}>
      <h3>{productName}</h3>
      <p>Harga: Rp {price}</p>
      <p>Stok: {stock}</p>
      <p>Status: {isAvailable ? "Tersedia" : "Habis"}</p>
    </div>
  );
}

// Validasi tipe props
ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number,
  isAvailable: PropTypes.bool,
};

// Nilai default props
ProductCard.defaultProps = {
  stock: 0,
  isAvailable: false,
};

export default ProductCard;
