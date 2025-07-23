import React from 'react'
import './BrandSection.css'// Assuming you'll add an image

const BrandSection = () => {
  return (
    <div className="brand-section fade-in">
      <div className="brand-image-container">
        <img src="/brand.png" alt="Our Brand Story" className="brand-image" loading="lazy" />
      </div>
      <div className="brand-content">
        <h2 className="section-title">More Than Just Clothes</h2>
        <p>
          We believe that fashion is a form of self-expression. Our collections are curated to empower you to tell your story, with quality pieces that are designed to last. From timeless classics to the latest trends, we're here to help you build a wardrobe that is uniquely you.
        </p>
        <button className="accent-btn">Learn More</button>
      </div>
    </div>
  )
}

export default BrandSection; 