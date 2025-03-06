import React, { useState } from "react";

const ShopProducts = () => {
  const products = [
    { id: 1, name: "Fresh Apples", price: 100 },
    { id: 2, name: "Organic Carrots", price: 80 },
    { id: 3, name: "Whole Wheat", price: 120 },
    { id: 4, name: "Farm Fresh Milk", price: 60 },
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
    <div style={{ padding: "20px" }}>
      <h1>Shop Products</h1>

      {/* Product List */}
      <div>
        <h2>Available Products</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {products.map((product) => (
            <li
              key={product.id}
              style={{
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            >
              {product.name} - ₹{product.price}
              <button
                onClick={() => addToCart(product)}
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#3b7d32",
                  color: "white",
                  border: "none",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart */}
      <div>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                }}
              >
                {item.name} - ₹{item.price}
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    backgroundColor: "#ff5252",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ₹{total}</h3>
      </div>
    </div>
  );
};

export default ShopProducts;
