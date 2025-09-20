import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
import RightPanel from "./components/Rightpanel";
import CenterDashboard from "./components/CenterDashboard";
import OrdersPage from "./pages/orders";

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <Routes>
        {/* Dashboard Page with TopNav and RightPanel */}
        <Route
          path="/"
          element={
            <div style={{ display: "flex" }}>
              <Sidebar />
              <main style={{ flex: 1, padding: "20px" }}>
                <TopNav />
                <div style={{ background: "#fff", minHeight: "calc(100vh - 80px)" }}>
                  <CenterDashboard />
                </div>
              </main>
              <RightPanel />
            </div>
          }
        />

        {/* Orders Page with only Sidebar */}
        <Route
          path="/orders"
          element={<OrdersPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
