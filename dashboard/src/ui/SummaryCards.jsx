import React from 'react';
import '../styles/SummaryCards.css';
import UpIcon from '../assets/maindash/up.svg';
import DownIcon from '../assets/maindash/down.svg';
import { useNavigate } from 'react-router-dom';

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
    navigate: true,
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
  const navigate = useNavigate();

  return (
    <div className="summary-cards">
      {cardData.map((card) => (
        <div
          key={card.label}
          className={`summary-card ${card.accent} ${card.navigate ? 'clickable' : ''}`}
          onClick={() => {
            if (card.navigate) navigate('/orders'); // navigate only for Orders card
          }}
        >
          <div className="card-label">{card.label}</div>
          <div className="card-value">{card.value}</div>
          <div
            className={`card-change ${
              card.change.startsWith('+') ? 'positive' : 'negative'
            }`}
          >
            {card.change}
            <img
              src={card.change.startsWith('+') ? UpIcon : DownIcon}
              alt={card.change.startsWith('+') ? 'trend up' : 'trend down'}
              className="trend-icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;