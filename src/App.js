import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import ShopProducts from "./ShopProducts";
import CropRecommendation from "./CropRecommendation"; // Import the CropRecommendation component
import DemandForecast from "./DemandForecast"; // Import the DemandForecast component
import InventoryManagement from "./InventoryManagement";
import PriceOptimization from "./PriceOptimization";
function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <header>
          <div className="logo">FarmFresh</div>
          <nav>
             <a href="/home">Home</a>
            <a href="/products">Shop Products</a>
            <a href="/cpp">Crop Recommendation</a>
            <a href="/pricing">Price Optimization</a>
            <a href="/inventory">Inventory</a>
            <a href="/forecast">Demand Forecast</a>
            
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/home"
            element={
              <>
                {/* Hero Section */}
                <div className="hero">
                  <h1>Predictive Insights for Agro Products</h1>
                  <button onClick={() => (window.location.href = "/products")}>
                    Shop Now
                  </button>
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
              </>
            }
          />
          <Route path="/products" element={<ShopProducts />} />
          <Route path="/cpp" element={<CropRecommendation />} />
          <Route path="/forecast" element={<DemandForecast />} />
          <Route path="/inventory" element={<InventoryManagement />} />
          <Route path="/pricing" element={<PriceOptimization />} />
          {/* Placeholder Routes */}
       
          <Route
            path="/inventory"
            element={<h2>Inventory Management Feature Coming Soon!</h2>}
          />
        </Routes>

        {/* Footer */}
        <footer>
          <p>
            © 2024 Agro E-Commerce | <a href="/contact">Contact Us</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
