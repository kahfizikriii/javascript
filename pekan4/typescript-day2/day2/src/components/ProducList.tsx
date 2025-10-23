// src/components/ProductList.tsx
import React from 'react';
import { Product } from '../types/index';

interface ProductListProps {
  products: Product[];
  onSelectProduct?: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onSelectProduct }) => {
  if (products.length === 0) {
    return <p>Tidak ada produk yang tersedia.</p>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => onSelectProduct?.(product)}
          style={{
            border: '1px solid #ddd',
            padding: '1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            width: '200px',
          }}
        >
          <h3>{product.name}</h3>
          <p>💰 {product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
