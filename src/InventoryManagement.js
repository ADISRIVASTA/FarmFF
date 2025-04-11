import React, { useState } from "react";

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "15px",
    maxWidth: "900px",
    margin: "20px auto",
    backgroundColor: "#f4fff4",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#388e3c",
    marginBottom: "20px",
  },
  warehouseSelector: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  warehouseButton: {
    padding: "10px 15px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  activeWarehouse: {
    backgroundColor: "#2e7d32",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "center",
    fontSize: "18px",
    color: "#2e7d32",
    backgroundColor: "#d4edda",
  },
  td: {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "center",
    fontSize: "16px",
    color: "#555",
  },
  input: {
    width: "60px",
    padding: "8px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 15px",
    margin: "5px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  deleteButton: {
    backgroundColor: "#e53935",
  },
  addProductContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  addProductInput: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    width: "200px",
  },
};

const InventoryManagement = () => {
  const [warehouses, setWarehouses] = useState([
    { id: 1, name: "Warehouse 1", inventory: [{ id: 1, name: "🌾 Wheat", quantity: 100 }] },
  ]);
  const [currentWarehouseId, setCurrentWarehouseId] = useState(1);
  const [newProduct, setNewProduct] = useState({ name: "", quantity: "" });
  const [newWarehouseName, setNewWarehouseName] = useState("");

  const currentWarehouse = warehouses.find((wh) => wh.id === currentWarehouseId);

  const updateQuantity = (productId, newQuantity) => {
    setWarehouses((prev) =>
      prev.map((wh) =>
        wh.id === currentWarehouseId
          ? {
              ...wh,
              inventory: wh.inventory.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
              ),
            }
          : wh
      )
    );
  };

  const addProduct = () => {
    if (newProduct.name && newProduct.quantity) {
      setWarehouses((prev) =>
        prev.map((wh) =>
          wh.id === currentWarehouseId
            ? {
                ...wh,
                inventory: [
                  ...wh.inventory,
                  { id: wh.inventory.length + 1, name: newProduct.name, quantity: Number(newProduct.quantity) },
                ],
              }
            : wh
        )
      );
      setNewProduct({ name: "", quantity: "" });
    }
  };

  const deleteProduct = (productId) => {
    setWarehouses((prev) =>
      prev.map((wh) =>
        wh.id === currentWarehouseId
          ? {
              ...wh,
              inventory: wh.inventory.filter((item) => item.id !== productId),
            }
          : wh
      )
    );
  };

  const addWarehouse = () => {
    if (newWarehouseName) {
      setWarehouses((prev) => [
        ...prev,
        { id: prev.length + 1, name: newWarehouseName, inventory: [] },
      ]);
      setNewWarehouseName("");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🏢 Multi-Warehouse Inventory Management</h2>

      {/* Warehouse Selector */}
      <div style={styles.warehouseSelector}>
        {warehouses.map((warehouse) => (
          <button
            key={warehouse.id}
            onClick={() => setCurrentWarehouseId(warehouse.id)}
            style={{
              ...styles.warehouseButton,
              ...(warehouse.id === currentWarehouseId ? styles.activeWarehouse : {}),
            }}
          >
            {warehouse.name}
          </button>
        ))}
      </div>

      {/* Add New Warehouse */}
      <div style={styles.addProductContainer}>
        <input
          type="text"
          placeholder="🏢 Warehouse Name"
          value={newWarehouseName}
          onChange={(e) => setNewWarehouseName(e.target.value)}
          style={styles.addProductInput}
        />
        <button onClick={addWarehouse} style={styles.button}>
          ➕ Add Warehouse
        </button>
      </div>

      {/* Current Warehouse Inventory */}
      <h3>{currentWarehouse?.name}</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>🌱 Product</th>
            <th style={styles.th}>📊 Quantity</th>
            <th style={styles.th}>⚙️ Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentWarehouse?.inventory.map((item) => (
            <tr key={item.id}>
              <td style={styles.td}>{item.name}</td>
              <td style={styles.td}>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                  style={styles.input}
                />
              </td>
              <td style={styles.td}>
                <button
                  onClick={() => deleteProduct(item.id)}
                  style={{ ...styles.button, ...styles.deleteButton }}
                >
                  🗑 Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Product */}
      <div style={styles.addProductContainer}>
        <input
          type="text"
          placeholder="🌾 Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          style={styles.addProductInput}
        />
        <input
          type="number"
          placeholder="📊 Quantity"
          value={newProduct.quantity}
          onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
          style={styles.addProductInput}
        />
        <button onClick={addProduct} style={styles.button}>
          ➕ Add Product
        </button>
      </div>
    </div>
  );
};

export default InventoryManagement;
