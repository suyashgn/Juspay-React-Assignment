import React from "react";
import "../styles/TopSellingProducts.css";

const products = [
  { name: "ASOS Ridley High Waist", price: 79.49, qty: 82, amount: 6518.18 },
  { name: "Marco Lightweight Shirt", price: 128.5, qty: 37, amount: 4754.5 },
  { name: "Half Sleeve Shirt", price: 39.99, qty: 64, amount: 2559.36 },
  { name: "Lightweight Jacket", price: 20.0, qty: 184, amount: 3680.0 },
  { name: "Marco Shoes", price: 79.49, qty: 64, amount: 1965.81 },
];

export default function TopSellingProducts() {
  return (
    <div className="card2">
      <h3 class= "title">Top Selling Products</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>${p.price.toFixed(2)}</td>
              <td>{p.qty}</td>
              <td>${p.amount.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
