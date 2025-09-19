import React from "react";
import "../styles/CenterDashboard.css";
import SummaryCards from "../ui/SummaryCards.jsx";
import ProjectionsChart from "../ui/ProjectionsChart.jsx";
import RevenueTrend from "../ui/RevenueTrend.jsx";
import RevenueByLocation from "../ui/RevenueByLocation.jsx";

function DashboardCenter() {
  return (
    <main className="dashboard-center">
      {/* Row with Summary + Projections */}
      <div className="dashboard-row top-row">
        <SummaryCards />
        <ProjectionsChart />
      </div>

      {/* Row with Revenue Trend + Revenue by Location */}
      <div className="dashboard-row">
        <RevenueTrend />
        <RevenueByLocation />
      </div>
    </main>
  );
}

export default DashboardCenter;