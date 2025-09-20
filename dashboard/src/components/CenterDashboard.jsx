import React from "react";
import "../styles/CenterDashboard.css";
import SummaryCards from "../ui/SummaryCards.jsx";
import ProjectionsChart from "../ui/ProjectionsChart.jsx";
import RevenueTrend from "../ui/RevenueTrend.jsx";
import RevenueByLocation from "../ui/RevenueByLocation.jsx";
import TopSellingProducts from "../ui/TopSellingProducts.jsx";    
import TotalSales from "../ui/TotalSales.jsx";

function DashboardCenter() {
  return (
    <main className="dashboard-center">
      <div className="titlemain">
         <h2 className="section-title">eCommerce</h2>
      </div>
      <div className="dashboard-row top-row">
        <SummaryCards />
        <ProjectionsChart />
      </div>

      {/* Bottom row: Revenue Trend + Revenue by Location */}
      <div className="dashboard-row bottom-row">
        <RevenueTrend />
        <RevenueByLocation />
      </div>
       
      <div className="dashboard-row bottom-row2">
        <TopSellingProducts />
        <TotalSales />
        
      </div>

    </main>
  );
}

export default DashboardCenter;
