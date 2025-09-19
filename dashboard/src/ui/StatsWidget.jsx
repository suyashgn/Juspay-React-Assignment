import { useEffect, useState } from "react";
import "../styles/StatsWidget.css";

const StatsWidget = () => {
  const [stats, setStats] = useState({
    customers: 3781,
    orders: 1219,
    revenue: 695,
    growth: 30.1,
  });

  // Function to update values randomly
  const updateStats = () => {
    setStats({
      customers: Math.floor(3000 + Math.random() * 1000),
      orders: Math.floor(1000 + Math.random() * 500),
      revenue: Math.floor(500 + Math.random() * 500),
      growth: (20 + Math.random() * 20).toFixed(1),
    });
  };

  useEffect(() => {
    const interval = setInterval(updateStats, 3000); // update every 3s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stats-widget">
      <h3 className="widget-title">eCommerce</h3>
      <div className="stats-grid">
        <div className="stat-card blue">
          <p className="stat-label">Customers</p>
          <h2>{stats.customers.toLocaleString()}</h2>
          <span className="stat-change positive">+11.01% ⬈</span>
        </div>

        <div className="stat-card">
          <p className="stat-label">Orders</p>
          <h2>{stats.orders.toLocaleString()}</h2>
          <span className="stat-change negative">-0.03% ⬊</span>
        </div>

        <div className="stat-card">
          <p className="stat-label">Revenue</p>
          <h2>${stats.revenue}</h2>
          <span className="stat-change positive">+15.03% ⬈</span>
        </div>

        <div className="stat-card purple">
          <p className="stat-label">Growth</p>
          <h2>{stats.growth}%</h2>
          <span className="stat-change positive">+6.08% ⬈</span>
        </div>
      </div>
    </div>
  );
};

export default StatsWidget;
