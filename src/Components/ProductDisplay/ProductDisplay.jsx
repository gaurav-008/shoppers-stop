import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Contexts/ShopContext";
export const ProductDisplay = (props) => {
  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className="productDisplay">
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={props.product.image} alt="" />
          <img src={props.product.image} alt="" />
          <img src={props.product.image} alt="" />
          <img src={props.product.image} alt="" />
        </div>
        <div className="productDisplay-img">
          <img className="productDisplay-main-img" src={props.product.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{props.product.name}</h1>
        <div className="productDisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productDisplay-right-prices">
            <div className="productDisplay-right-price-old">
                Rs{props.product.old_price}
            </div>
            <div className="productDisplay-right-price-new">
                Rs{props.product.new_price}
            </div>
        </div>
        <div className="productDisplay-right-description">
        Crafted for the modern adventurer, this water-resistant, lightweight jacket seamlessly blends fashion and practicality. Featuring a sleek design and versatile pockets, it effortlessly transitions from city streets to outdoor pursuits
        </div>
        <div className="productDisplay-right-size">
            <h1>Select size</h1>
            <div className="productDisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
        {/* <p className="productDisplay-right-category"><span>Category :</span>Women, T-shirt, Crop Top</p>
        <p className="productDisplay-right-category"><span>Tags :</span>Modern, Latest</p> */}
      </div>
    </div>
  );
};
