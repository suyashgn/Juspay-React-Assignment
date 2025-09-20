import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import "../styles/TotalSales.css";

const data = [
  { name: "Direct", value: 300.56 },
  { name: "Affiliate", value: 135.18 },
  { name: "Sponsored", value: 154.02 },
  { name: "E-mail", value: 48.96 },
];

const COLORS = ["#000000", "#82ca9d", "#8884d8", "#8dd1e1"];

export default function TotalSales() {
  return (
    <div className="card">
      <h3>Total Sales</h3>
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" />
      </PieChart>
    </div>
  );
}
