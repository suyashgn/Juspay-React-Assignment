import React from "react";
import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import OrdersTable from "./OrdersTable";
import "../styles/OrdersPage.css";

function OrdersPage() {
  return (
    <div className="orders-page">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="orders-content">
        {/* Top Navigation */}
        <TopNav />

        {/* Page Content */}
        <div className="orders-main">
          <OrdersTable />
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;




