import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from "./components/Sidebar";
import RightPanel from "./components/Rightpanel";
import TopNav from "./components/TopNav";
import CenterDashboard from './components/CenterDashboard.jsx';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ display: "flex" }}>
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Dashboard Content */}
      <main style={{ flex: 1, padding: "20px" }}>
        <TopNav/>

    <div style={{background: "#fff" }}>
      <CenterDashboard />
    </div>

      </main>

      {/* Right Panel */}
      <RightPanel />
    </div>
  );
}

export default App
