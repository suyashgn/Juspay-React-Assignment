import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/RevenueTrend.css';

const revenueData = [
  { month: 'Jan', current: 12, prev: 17 },
  { month: 'Feb', current: 17, prev: 13 },
  { month: 'Mar', current: 19, prev: 14 },
  { month: 'Apr', current: 23, prev: 21 },
  { month: 'May', current: 26, prev: 22 },
  { month: 'Jun', current: 29, prev: 27 },
];

function RevenueTrend() {
  return (
    <div className="trend-card">
      <div className="trend-title">
        Revenue &nbsp;
        <span className="trend-legend current">• Current Week $58,211</span>
        <span className="trend-legend prev">• Previous Week $68,768</span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={revenueData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="current" stroke="#A8C5DA" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="prev" stroke="#000000ff" strokeDasharray="4" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueTrend;
