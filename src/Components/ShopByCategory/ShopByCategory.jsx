import React from 'react';
import './ShopByCategory.css';
import { Link } from 'react-router-dom';
import women from '../Assets/womenCategory.png';

const categories = [
  {
    name: 'Chic',
    image: women,
    path: '/women'
  },
  {
    name: 'Chap',
    image: 'https://img.joomcdn.net/4491d01d22252b48d3ff4f08c24849688a779204_original.jpeg',
    path: '/men'
  }, 
  {
    name: 'chico',
    image: 'https://supermixstudio.com/cdn/shop/collections/WEB7830520-63F9ADE9-C85B-E6F2-74C6-68BDBBC1B137.jpg?v=1653959706',
    path: '/kids'
  }
];

const ShopByCategory = () => {
  return (
    <div className="shop-by-category">
      <h2 className="section-title fade-in">Shop by Category</h2>
      <hr className="section-divider fade-in" />
      <div className="category-cards">
        {categories.map((category, index) => (
          <div key={index} className="category-card-container fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
            <Link to={category.path} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <div className="category-overlay">
                <h3 className="category-name">{category.name}</h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory; 