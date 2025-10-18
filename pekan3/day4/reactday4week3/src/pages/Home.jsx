import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=12")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="loading">Loading products...</p>;

  return (
    <div className="home">
      <h2>Daftar Produk</h2>
      <div className="product-grid">
        {products.map((prod) => (
          <div key={prod.id} className="product-card">
            <img src={prod.images?.[0]} alt={prod.title} />
            <h3>{prod.title}</h3>
            <p>Rp {prod.price.toLocaleString()}</p>
            <Link to={`/products/${prod.id}`} className="detail-btn">
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
