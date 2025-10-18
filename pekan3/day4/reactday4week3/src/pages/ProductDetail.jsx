import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [productId]);

  if (loading) return <p className="loading">Memuat data produk...</p>;
  if (!product) return <p>Produk tidak ditemukan</p>;

  return (
    <div className="detail">
      <img src={product.images?.[0]} alt={product.title} />
      <div className="info">
        <h2>{product.title}</h2>
        <p className="price">Rp {product.price.toLocaleString()}</p>
        <p>{product.description}</p>
        <Link to="/" className="back-btn">← Kembali</Link>
      </div>
    </div>
  );
};

export default ProductDetail;
