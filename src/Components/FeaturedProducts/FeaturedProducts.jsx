import React from 'react'
import './FeaturedProducts.css'
import all_product from '../Assets/all_product'
import { Items } from '../Items/Items'

const FeaturedProducts = ({ onAddWishlist, onRemoveWishlist, wishlist = [] }) => {
  // Get first 8 products as featured
  const featured = all_product.slice(0, 8);
  return (
    <div className='featured-products' id='featured-collection'>
      <h2 className="section-title fade-in">Featured Products</h2>
      <hr className="section-divider fade-in" />
      <div className="featured-products-grid">
        {featured.map((item, i) => (
          <div key={i} className="fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <Items id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} onAddWishlist={onAddWishlist} onRemoveWishlist={onRemoveWishlist} isWishlisted={wishlist.includes(item.id)}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts; 