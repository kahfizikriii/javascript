import React from "react";

function DiscountPrice({ price, discount }) {
  const finalPrice = price - price * (discount / 100);

  return (
    <p>
      Harga awal: Rp{price} <br />
      Diskon: {discount}% <br />
      <strong>Harga setelah diskon: Rp{finalPrice}</strong>
    </p>
  );
}

export default DiscountPrice;
