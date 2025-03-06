import React from "react";

function Header() {
  return (
    <header>
      <div className="logo">Agro E-Commerce</div>
      <nav>
        <a href="/">Home</a>
        <a href="/products">Shop Products</a>
        <a href="/forecast">Demand Forecast</a>
        <a href="/pricing">Price Optimization</a>
        <a href="/inventory">Inventory</a>
        <a href="/contact">Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
