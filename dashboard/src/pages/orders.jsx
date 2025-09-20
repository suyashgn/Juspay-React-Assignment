import React from "react";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import "../styles/OrdersPage.css";

function OrdersPage() {
  return (
    <div className="orders-page" style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="orders-content" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Top Navigation */}
        <TopNav />

        {/* Page Content */}
        <div style={{ padding: "20px", background: "#fff", flex: 1 }}>
          <h1>Orders Page</h1>
          <p>This page now includes TopNav, but no RightPanel.</p>
          {/* Add your orders table or components here */}
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
