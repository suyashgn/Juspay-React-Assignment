import React from "react";

export default function Pagination({ page, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="order-pagination">
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>&lt;</button>
      {pages.map(p => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          style={{ fontWeight: p === page ? "bold" : "normal" }}>
          {p}
        </button>
      ))}
      <button onClick={() => onPageChange(page + 1)} disabled={page === totalPages}>&gt;</button>
    </div>
  );
}
