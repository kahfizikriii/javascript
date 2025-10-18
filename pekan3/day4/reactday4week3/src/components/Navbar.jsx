import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">ReactShop</h1>
      <div className="links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/dashboard/profile">Dashboard</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
