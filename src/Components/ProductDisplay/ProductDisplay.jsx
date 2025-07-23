import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Contexts/ShopContext";

const Accordion = ({ title, children, open, onClick }) => (
  <div className="accordion-section">
    <button className="accordion-title" onClick={onClick}>{title}</button>
    {open && <div className="accordion-content">{children}</div>}
  </div>
);

export const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [activeImg, setActiveImg] = useState(product?.image);
  const [activeAccordion, setActiveAccordion] = useState('Description');
  const [selectedSize, setSelectedSize] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  if (!product) return <div>Product not found.</div>;

  // Mock gallery images (repeat main image for now)
  const gallery = [product.image, product.image, product.image, product.image];

  const handleAddToCart = async () => {
    setLoading(true);
    await new Promise(res => setTimeout(res, 900));
    addToCart(product.id);
    setLoading(false);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  return (
    <div className="product-hnm-container">
      <div className="product-hnm-gallery">
        <div className="product-hnm-thumbnails">
          {gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={product.name + ' thumbnail'}
              className={activeImg === img ? 'active' : ''}
              onClick={() => setActiveImg(img)}
            />
          ))}
        </div>
        <div className="product-hnm-main-img">
          <img src={activeImg} alt={product.name} />
        </div>
      </div>
      <div className="product-hnm-info">
        <h1 className="product-hnm-title">{product.name}</h1>
        <div className="product-hnm-price">Rs {product.new_price}</div>
        <div className="product-hnm-sizes">
          <div className="product-hnm-sizes-label">Select size</div>
          <div className="product-hnm-sizes-list">
            {["S", "M", "L", "XL", "XXL"].map(size => (
              <button
                key={size}
                className={`product-hnm-size-btn${selectedSize === size ? ' selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button className="product-hnm-add-btn" onClick={handleAddToCart} disabled={loading}>
          {loading ? <span className="product-hnm-spinner"></span> : 'Add to Bag'}
        </button>
        {toast && <div className="product-hnm-toast">Added to bag</div>}
        <div className="product-hnm-accordion">
          <Accordion
            title="Description"
            open={activeAccordion === 'Description'}
            onClick={() => setActiveAccordion(activeAccordion === 'Description' ? '' : 'Description')}
          >
            <div className="product-hnm-desc">{product.description}</div>
          </Accordion>
          <Accordion
            title="Details"
            open={activeAccordion === 'Details'}
            onClick={() => setActiveAccordion(activeAccordion === 'Details' ? '' : 'Details')}
          >
            <ul className="product-hnm-details">
              <li>Material: 100% Cotton</li>
              <li>Fit: Regular</li>
              <li>Care: Machine wash cold</li>
            </ul>
          </Accordion>
          <Accordion
            title="Reviews"
            open={activeAccordion === 'Reviews'}
            onClick={() => setActiveAccordion(activeAccordion === 'Reviews' ? '' : 'Reviews')}
          >
            <div className="product-hnm-reviews">
              <div className="review">
                <div className="review-stars">
                  <img src={star_icon} alt="" /><img src={star_icon} alt="" /><img src={star_icon} alt="" /><img src={star_icon} alt="" /><img src={star_dull_icon} alt="" />
                </div>
                <div className="review-text">Great fit and quality. Love the minimal style!</div>
                <div className="review-author">- Jessica P.</div>
              </div>
            </div>
          </Accordion>
        </div>
        <div className="product-hnm-delivery">
          <div className="delivery-title">Delivery & Returns</div>
          <div className="delivery-info">Free standard delivery on orders over Rs 999. 30-day free returns.</div>
        </div>
      </div>
    </div>
  );
};
