import React from 'react';
import '../styles/SummaryCards.css';

const cardData = [
  {
    label: 'Customers',
    value: '3,781',
    change: '+11.01%',
    accent: 'accent-blue',
  },
  {
    label: 'Orders',
    value: '1,219',
    change: '-0.03%',
    accent: '',
  },
  {
    label: 'Revenue',
    value: '$695',
    change: '+15.03%',
    accent: '',
  },
  {
    label: 'Growth',
    value: '30.1%',
    change: '+6.08%',
    accent: 'accent-lightblue',
  },
];

function SummaryCards() {
  return (
    <div className="summary-cards">
      {cardData.map((card) => (
        <div className={`summary-card ${card.accent}`} key={card.label}>
          <div className="card-label">{card.label}</div>
          <div className="card-value">{card.value}</div>
          <div className={`card-change ${card.change.startsWith('+') ? 'positive' : 'negative'}`}>
            {card.change} <span role="img" aria-label="trend">📈</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
