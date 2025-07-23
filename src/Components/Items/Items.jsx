import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

const graffitiStickers = [
  <span className="graffiti-sticker graffiti-bounce" role="img" aria-label="spray">🖌️</span>,
  <span className="graffiti-sticker graffiti-wiggle" role="img" aria-label="crown">👑</span>,
  <span className="graffiti-sticker graffiti-pop" role="img" aria-label="star">⭐</span>,
  <span className="graffiti-sticker graffiti-rotate" role="img" aria-label="fire">🔥</span>,
  <span className="graffiti-sticker graffiti-bounce" role="img" aria-label="boom">💥</span>,
];

export const Items = (props) => {
  // Randomly show a sticker on about 1/3 of cards
  const showSticker = Math.random() < 0.33;
  const sticker = showSticker ? graffitiStickers[Math.floor(Math.random() * graffitiStickers.length)] : null;

  const [showWishlistToast, setShowWishlistToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const isWishlisted = props.isWishlisted;
  const handleWishlist = (e) => {
    e.preventDefault();
    if (isWishlisted) {
      if (props.onRemoveWishlist) props.onRemoveWishlist(props.id);
      setToastMsg('Removed from wishlist!');
    } else {
      if (props.onAddWishlist) props.onAddWishlist(props.id);
      setToastMsg('Added to wishlist!');
    }
    setShowWishlistToast(true);
    setTimeout(() => setShowWishlistToast(false), 1500);
  };
  return (
    <div className='item item-with-wishlist'>
      <Link to={`/product/${props.id}`} tabIndex={0} aria-label={`View details for ${props.name}`} className="item-zara-link">
        <div className="item-zara-image-container">
          <img
            src={props.image}
            alt={props.name}
            className="item-zara-image"
          />
          <button className="item-wishlist-btn" aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"} onClick={handleWishlist} tabIndex={-1}>
            <img src={require(`../Assets/${isWishlisted ? 'icons8-heart-48.png' : 'icons8-heart-40.png'}`)} alt="Wishlist" style={{width: 24, height: 24, objectFit: 'contain'}} />
          </button>
          <div className="item-zara-overlay">
            <div className="item-zara-title">{props.name}</div>
            <div className="item-zara-price">Rs {props.new_price}</div>
          </div>
        </div>
      </Link>
      {showWishlistToast && <div className="item-wishlist-toast">{toastMsg}</div>}
    </div>
  )
}
