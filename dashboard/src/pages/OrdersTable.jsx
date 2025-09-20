// Import SVG icons from assets
// import { ReactComponent as PlusIcon } from "../assets/order/Add.svg";
// import { ReactComponent as SearchIcon } from "../assets/order/Search.svg";
// import { ReactComponent as FilterIcon } from "../assets/order/filter.svg";
// import { ReactComponent as SortIcon } from "../assets/order/sort.svg";

import React, { useState } from "react";
import "../styles/OrdersPage.css";

const OrdersTable = () => {
  const initialOrders = [
    { id: "#CMP801", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress" },
    { id: "#CMP802", user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete" },
    { id: "#CMP803", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending" },
    { id: "#CMP804", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved" },
    { id: "#CMP805", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected" },
    { id: "#CMP806", user: "Natali Craig", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress" },
    { id: "#CMP807", user: "Kate Morrison", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete" },
    { id: "#CMP808", user: "Drew Cano", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending" },
    { id: "#CMP809", user: "Orlando Diggs", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved" },
    { id: "#CMP810", user: "Andi Lane", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected" },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const itemsPerPage = 5;

  // Filtering
  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.user.toLowerCase().includes(search.toLowerCase()) ||
      order.project.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Sorting
  const sortedOrders = [...filteredOrders].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Pagination
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentOrders = sortedOrders.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedOrders.length / itemsPerPage);

  return (
    <div className="orders-container">
      <h2 className="orders-title">Order List</h2>

      {/* Controls */}
      <div className="orders-controls">
        <button className="btn-add">+ Add Order</button>

        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Status</option>
          <option value="In Progress">In Progress</option>
          <option value="Complete">Complete</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* Table */}
      <table className="orders-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("id")}>Order ID</th>
            <th onClick={() => handleSort("user")}>User</th>
            <th onClick={() => handleSort("project")}>Project</th>
            <th onClick={() => handleSort("address")}>Address</th>
            <th onClick={() => handleSort("date")}>Date</th>
            <th onClick={() => handleSort("status")}>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order, idx) => (
            <tr key={idx}>
              <td>{order.id}</td>
              <td>{order.user}</td>
              <td>{order.project}</td>
              <td>{order.address}</td>
              <td>{order.date}</td>
              <td>
                <span className={`status ${order.status.replace(" ", "-").toLowerCase()}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)}>
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => p + 1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default OrdersTable;  