import React, { useState } from "react";

const ShopProducts = () => {
  const products = [
    { id: 1, name: "\uD83C\uDF4E Fresh Apples", price: 100 },
    { id: 2, name: "\uD83E\uDD55 Organic Carrots", price: 80 },
    { id: 3, name: "\uD83C\uDF3F Whole Wheat", price: 120 },
    { id: 4, name: "\uD83E\uDD5B Farm Fresh Milk", price: 60 },
  ];

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setTotal((prevTotal) => prevTotal + product.price);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    const removedItem = cart.find((item) => item.id === productId);
    if (removedItem) {
      setTotal((prevTotal) => prevTotal - removedItem.price);
    }
    setCart(updatedCart);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "'Comic Sans MS', cursive", backgroundColor: "#f9f9f9" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#ff6f61", fontSize: "2.5rem" }}>
         SHOP 
      </h1>

      {/* Product List */}
      <div>
        <h2 style={{ marginBottom: "10px", color: "#5c80bc" }}>
          🏦 Available Products
        </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {products.map((product) => (
            <li
              key={product.id}
              style={{
                marginBottom: "10px",
                padding: "15px",
                border: "2px solid #f7d6e0",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#fff",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span style={{ fontSize: "1.2rem", color: "#444" }}>{product.name} - ₹{product.price}</span>
              <button
                onClick={() => addToCart(product)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#ff6f61",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontSize: "1rem",
                }}
              >
                🛒 Add
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart */}
      <div style={{ marginTop: "30px" }}>
        <h2 style={{ color: "#ff6f61" }}>
          🛍️ Your Cart
        </h2>
        {cart.length === 0 ? (
          <p style={{ fontStyle: "italic", color: "#888" }}>Your cart is empty. 😭</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  marginBottom: "10px",
                  padding: "15px",
                  border: "2px solid #d1f7c4",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#e9f9e7",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span style={{ fontSize: "1.2rem", color: "#333" }}>{item.name} - ₹{item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#ff4d4d",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  🗑 Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <h3 style={{ marginTop: "20px", color: "#5c80bc", fontSize: "1.5rem" }}>
          💵 Total: ₹{total}
        </h3>
      </div>
    </div>
  );
};

export default ShopProducts;