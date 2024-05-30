import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Contexts/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
export const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);
  return (
    <div className="cartItems">
      <div className="cartItems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartItems-format cartItems-format-main">
                <img src={e.image} alt="" className="cartItems-product-icon" />
                <p>{e.name}</p>
                <p>Rs {e.new_price}</p>
                <button className="cartItems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>Rs {e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartItems-remove-icon"
                  src={remove_icon}
                  alt=""
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartItems-down">
        <div className="cartItems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartItems-total-item">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartItems-total-item">
              <p>Shipping fee</p>
              {getTotalCartAmount() < 199 ? <p>Rs 49</p> : <p>Free</p>}
            </div>
            <hr />
            <div className="cartItems-total-item">
              <h3>Total</h3>
              {getTotalCartAmount() < 199 ? (
                <p>Rs {getTotalCartAmount() + 49}</p>
              ) : (
                <p>Rs {getTotalCartAmount()}</p>
              )}
            </div>
          </div>
          <button>Checkout</button>
        </div>
        <div className="cartItems-promocode">
          <p>Enter a promo code</p>
          <div className="cartItems-promobox">
            <input type="text" placeholder="promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
