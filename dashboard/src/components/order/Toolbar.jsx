import React from "react";

export default function Toolbar({ onSort, onFilter }) {
  return (
    <div className="order-toolbar" style={{ display: "flex", gap: "1em", marginBottom: "1em" }}>
      <button onClick={onSort}>Sort</button>
      <button onClick={onFilter}>Filter</button>
    </div>
  );
}
