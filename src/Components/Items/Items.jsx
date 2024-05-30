import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'
export const Items = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="new-price">
                Rs {props.new_price}
            </div>
            <div className="old-price">
                Rs {props.old_price}
            </div>
        </div>
    </div>
  )
}
