// src/App.tsx
import React, { useState } from 'react';
import UserCard from './components/UseCard';
import ProductList from './components/ProducList';
import Form from './components/LoginForm';
import { Product, FormData } from './types/index';

const App: React.FC = () => {
  // Data dummy untuk produk
  const [products] = useState<Product[]>([
    { id: 1, name: 'Laptop ASUS ROG', price: 19500000 },
    { id: 2, name: 'Monitor Dell 24"', price: 2800000 },
    { id: 3, name: 'Keyboard Mechanical', price: 750000 },
  ]);

  // Menangani produk yang diklik
  const handleSelectProduct = (product: Product) => {
    alert(`Kamu memilih: ${product.name}`);
  };

  // Menangani form submit
  const handleFormSubmit = (data: FormData) => {
    console.log('Form Submitted:', data);
    alert(`Data terkirim:\nNama: ${data.name}\nEmail: ${data.email}`);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🛍️ Toko Online</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>👤 User Info</h2>
        <UserCard
          name="Muhammad Al Kahfi Zikri"
          age={20}
        />
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>📦 Daftar Produk</h2>
        <ProductList products={products} onSelectProduct={handleSelectProduct} />
      </section>

      <section>
        <h2>📝 Form Kontak</h2>
        <Form onSubmit={handleFormSubmit} />
      </section>
    </div>
  );
};

export default App;
