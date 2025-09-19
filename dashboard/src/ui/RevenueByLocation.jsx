import React from 'react';

const locs = [
  { city: 'New York', revenue: '72K' },
  { city: 'San Francisco', revenue: '39K' },
  { city: 'Sydney', revenue: '25K' },
  { city: 'Singapore', revenue: '61K' },
];

function RevenueLocation() {
  return (
    <div className="location-card">
      <div className="location-title">Revenue by Location</div>
      <div className="location-map">[Map Placeholder]</div>
      <div className="location-list">
        {locs.map(loc => (
          <div className="location-row" key={loc.city}>
            <span className="location-city">{loc.city}</span>
            <span className="location-revenue">{loc.revenue}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RevenueLocation;
