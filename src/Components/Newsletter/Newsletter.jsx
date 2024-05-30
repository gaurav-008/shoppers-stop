import React from 'react'
import './Newsletter.css'
export const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers on your e-mail</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your e-mail id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
