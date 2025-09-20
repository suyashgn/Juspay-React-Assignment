import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/ProjectionsChart.css';

const chartData = [
  { name: 'Jan', Actual: 20, Projection: 23 },
  { name: 'Feb', Actual: 25, Projection: 28 },
  { name: 'Mar', Actual: 22, Projection: 25 },
  { name: 'Apr', Actual: 25, Projection: 30 },
  { name: 'May', Actual: 15, Projection: 18 },
  { name: 'Jun', Actual: 22, Projection: 25 },
];

function ProjectionsChart() {
  return (
    <div className="chart-card">
      <div className="chart-title">Projections vs Actuals</div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Actual" stackId="a" fill="#A8C5DA" />
          <Bar dataKey="Projection" stackId="a" fill="#CFDFEB" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProjectionsChart;
