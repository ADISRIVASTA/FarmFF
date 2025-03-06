import React from "react";
import "./style.css"; // Import your CSS file

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo">Agro E-Commerce</div>
        <nav>
          <a href="/home">Home</a>
          <a href="/products">Shop Products</a>
          <a href="/forecast">Demand Forecast</a>
          <a href="/pricing">Price Optimization</a>
          <a href="/inventory">Inventory</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <h1>Predictive Insights for Agro Products</h1>
        <button onClick={() => (window.location.href = "/products")}>Shop Now</button>
      </div>

      {/* Categories Section */}
      <section className="categories">
        <div className="category-card">
          <img src="images/images.jpg" alt="Fruits" />
          <h3>Fruits</h3>
          <button>Explore</button>
        </div>
        <div className="category-card">
          <img src="images/images (1).jpg" alt="Vegetables" />
          <h3>Vegetables</h3>
          <button>Explore</button>
        </div>
        <div className="category-card">
          <img
            src="images/complete-grains-with-their-full-nutritional-value-intact-ai-generated-photo.jpg"
            alt="Grains"
          />
          <h3>Grains</h3>
          <button>Explore</button>
        </div>
        <div className="category-card">
          <img src="images/images (2).jpg" alt="Organic" />
          <h3>Organic Products</h3>
          <button>Explore</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © 2024 Agro E-Commerce | <a href="/contact">Contact Us</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
