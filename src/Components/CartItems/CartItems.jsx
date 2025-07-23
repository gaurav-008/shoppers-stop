import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Contexts/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../Pages/LoginSignUp";

export const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  const cartProducts = all_product.filter(e => cartItems[e.id] > 0);
  const subtotal = getTotalCartAmount();
  const shipping = subtotal < 199 && subtotal > 0 ? 49 : 0;
  const total = subtotal + shipping;
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (isUserLoggedIn()) {
      navigate('/checkout');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="zara-cart-container">
      <div className="zara-cart-main">
        <div className="zara-cart-left">
          <h1 className="zara-cart-title">SHOPPING BAG</h1>
          {cartProducts.length === 0 ? (
            <div className="zara-cart-empty">Your shopping bag is empty.</div>
          ) : (
            <ul className="zara-cart-list">
              {cartProducts.map((e) => (
                <li className="zara-cart-item" key={e.id}>
                  <div className="zara-cart-img-wrap">
                    <img src={e.image} alt={e.name} className="zara-cart-img" loading="lazy" />
                  </div>
                  <div className="zara-cart-info">
                    <div className="zara-cart-name">{e.name}</div>
                    <div className="zara-cart-price">Rs {e.new_price}</div>
                    <div className="zara-cart-qty-row">
                      <span>Qty:</span>
                      <span className="zara-cart-qty">{cartItems[e.id]}</span>
                      <img
                        className="zara-cart-remove"
                        src={remove_icon}
                        alt="Remove"
                        onClick={() => removeFromCart(e.id)}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="zara-cart-right">
          <div className="zara-cart-summary">
            <h2 className="zara-cart-summary-title">SUMMARY</h2>
            <div className="zara-cart-summary-row">
              <span>Subtotal</span>
              <span>Rs {subtotal}</span>
            </div>
            <div className="zara-cart-summary-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "Free" : `Rs ${shipping}`}</span>
            </div>
            <div className="zara-cart-summary-row zara-cart-summary-total">
              <span>Total</span>
              <span>Rs {total}</span>
            </div>
            <button className="zara-cart-checkout" onClick={handleCheckout}>CHECKOUT</button>
            <div className="zara-cart-promo">
              <input type="text" placeholder="Enter a promo code" />
              <button>APPLY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
