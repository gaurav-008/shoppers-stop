import React from 'react';
import './Card.css';

const CARD_IMAGES = {
  Silver: '/images/silver.jpg', 
  Golden: '/images/gold.jpg',  
  Platinum: '/images/platinum.jpg',
};

const CARD_DETAILS = {
  Silver: {
    price: '₹199',
    features: [
      '5% off on all purchases',
      'Standard shipping (3-5 days)',
      'Early access to seasonal sales',
      'Basic customer support',
      'Monthly member newsletter',
      '',
    ],
    buttonColor: 'linear-gradient(90deg, #8e9eab 0%, #eef2f3 100%)',
  },
  Golden: {
    price: '₹399',
    features: [
      '10% off on all purchases',
      'Free standard shipping',
      'Priority access to new launches',
      'Exclusive gold-only deals',
      'Birthday surprise gift',
      'Priority customer support',
    ],
    buttonColor: 'linear-gradient(90deg, #f7971e 0%, #ffd200 100%)',
  },
  Platinum: {
    price: '₹599',
    features: [
      '15% off on all purchases',
      'Free express shipping (1-2 days)',
      'VIP access to all sales & launches',
      'Exclusive platinum-only deals',
      'Anniversary & birthday luxury gifts',
      '24/7 dedicated platinum support',
      'Personal shopping assistant',
    ],
    buttonColor: 'linear-gradient(90deg, #e96443 0%, #904e95 100%)',
  },
};

const Card = ({ type }) => {
  const cardImage = CARD_IMAGES[type];
  const details = CARD_DETAILS[type];
  if (cardImage && details) {
    return (
      <div className="card card-image-card">
        <img src={cardImage} alt={`${type} Card`} className="card-image-bg" />
        <div className="card-content">
          <div className="card-price" style={{color: 'black'}}>{details.price}</div>
          <ul className="card-features">
            {details.features.map((feature, i) => (
              <li key={i} className="card-feature-item">
                <span className="card-feature-check">✔</span> {feature}
              </li>
            ))}
          </ul>
          <button
            className="card-purchase-btn"
            style={{
              background: details.buttonColor,
              color: '#fff',
              border: 'none',
              borderRadius: '2rem',
              padding: '0.6rem 2rem',
              fontWeight: 'bold',
              fontSize: '1rem',
              marginTop: '1rem',
              cursor: 'pointer',
              boxShadow: '0 2px 12px #0002',
            }}
          >
            Purchase
          </button>
        </div>
      </div>
    );
  }
  // fallback for other types
  return (
    <div className={`card card-modern`}>
      <div className="card-modern-content">
        <div className="card-modern-type">{type} Card</div>
      </div>
    </div>
  );
};

export default Card;