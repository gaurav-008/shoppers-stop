import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import ShopByCategory from '../Components/ShopByCategory/ShopByCategory'
import FeaturedProducts from '../Components/FeaturedProducts/FeaturedProducts'
import BrandSection from '../Components/BrandSection/BrandSection'
import Testimonials from '../Components/Testimonials/Testimonials'

export const Shop = ({ onAddWishlist, onRemoveWishlist, wishlist }) => {
  return (
    <div>
        <Hero/>
        <ShopByCategory />
        <FeaturedProducts onAddWishlist={onAddWishlist} onRemoveWishlist={onRemoveWishlist} wishlist={wishlist} />
        <BrandSection />
        <Testimonials />
    </div>
  )
}
