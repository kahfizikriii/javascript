import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Route dengan Parameter */}
          <Route path="/products/:productId" element={<ProductDetail />} />

          {/* Nested Routes */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
