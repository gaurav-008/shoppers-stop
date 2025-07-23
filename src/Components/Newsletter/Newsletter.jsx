import React from 'react'
import './Newsletter.css'
export const Newsletter = () => {
  return (
    <div className='newsletter fade-in'>
      <h1 className="slide-up">Get Exclusive Offers On Your Email</h1>
      <p className="slide-up" style={{ animationDelay: '0.3s' }}>Subscribe to our newsletter and stay updated</p>
      <div className="newsletter-input slide-up" style={{ animationDelay: '0.6s' }}>
        <input type="email" placeholder='Your email address' />
        <button className="accent-btn">Subscribe</button>
      </div>
    </div>
  )
}
