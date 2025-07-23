import React, { useState, useContext, useEffect } from "react";
import "./CSS/Checkout.css";
import { ShopContext } from "../Contexts/ShopContext";

function getDeliveryEstimate() {
  const now = new Date();
  const min = new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000);
  const max = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  return `${min.toLocaleDateString()} - ${max.toLocaleDateString()}`;
}

function getRandomStatus() {
  const statuses = ["Processing", "Shipped", "Delivered"];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

export const Checkout = () => {
  const { all_product, cartItems, setCartItems } = useContext(ShopContext);
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState({ name: "", phone: "", address: "", city: "", zip: "" });
  const [payment, setPayment] = useState({ card: "", expiry: "", cvv: "" });
  const [loading, setLoading] = useState(false);
  const [deliveryEstimate] = useState(getDeliveryEstimate());

  const handleAddressChange = e => setAddress({ ...address, [e.target.name]: e.target.value });
  const handlePaymentChange = e => setPayment({ ...payment, [e.target.name]: e.target.value });

  const handleAddressSubmit = e => {
    e.preventDefault();
    setStep(2);
  };
  const handlePaymentSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await new Promise(res => setTimeout(res, 1200));
    setLoading(false);
    // Save order to localStorage
    const orderedItems = all_product.filter(item => cartItems[item.id] > 0).map(item => ({
      id: item.id,
      name: item.name,
      qty: cartItems[item.id],
      price: item.new_price,
      image: item.image
    }));
    const order = {
      address,
      items: orderedItems,
      date: new Date().toISOString(),
      deliveryEstimate,
      status: getRandomStatus()
    };
    const prevOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    localStorage.setItem('orders', JSON.stringify([order, ...prevOrders]));
    setStep(3);
  };

  // Clear cart after successful checkout
  useEffect(() => {
    if (step === 3) {
      const cleared = {};
      all_product.forEach(item => { cleared[item.id] = 0; });
      setCartItems(cleared);
    }
  }, [step, all_product, setCartItems]);

  // Get ordered items
  const orderedItems = all_product.filter(item => cartItems[item.id] > 0);

  return (
    <div className="checkout-root">
      <h1 className="checkout-title">Checkout</h1>
      <div className="checkout-steps">
        <div className={`checkout-step${step === 1 ? ' active' : ''}`}>1. Address</div>
        <div className={`checkout-step${step === 2 ? ' active' : ''}`}>2. Payment</div>
        <div className={`checkout-step${step === 3 ? ' active' : ''}`}>3. Confirmation</div>
      </div>
      {step === 1 && (
        <form className="checkout-form" onSubmit={handleAddressSubmit}>
          <input name="name" placeholder="Full Name" value={address.name} onChange={handleAddressChange} required />
          <input name="phone" placeholder="Phone Number" value={address.phone} onChange={handleAddressChange} required />
          <input name="address" placeholder="Address" value={address.address} onChange={handleAddressChange} required />
          <input name="city" placeholder="City" value={address.city} onChange={handleAddressChange} required />
          <input name="zip" placeholder="ZIP Code" value={address.zip} onChange={handleAddressChange} required />
          <button type="submit" className="checkout-btn">Continue to Payment</button>
        </form>
      )}
      {step === 2 && (
        <form className="checkout-form" onSubmit={handlePaymentSubmit}>
          <input name="card" placeholder="Card Number" value={payment.card} onChange={handlePaymentChange} required />
          <input name="expiry" placeholder="Expiry (MM/YY)" value={payment.expiry} onChange={handlePaymentChange} required />
          <input name="cvv" placeholder="CVV" value={payment.cvv} onChange={handlePaymentChange} required />
          <button type="submit" className="checkout-btn" disabled={loading}>{loading ? "Processing..." : "Pay Now"}</button>
        </form>
      )}
      {step === 3 && (
        <div className="checkout-confirmation">
          <div className="checkout-success">Thank you for your order! 🎉</div>
          <div className="checkout-summary">
            <div><b>Name:</b> {address.name}</div>
            <div><b>Address:</b> {address.address}, {address.city}, {address.zip}</div>
            <div><b>Estimated Delivery:</b> {deliveryEstimate}</div>
            <div style={{margin: '18px 0 8px 0', fontWeight: 700}}>Items Ordered:</div>
            <ul className="checkout-items-list">
              {orderedItems.map(item => (
                <li key={item.id} className="checkout-item-row">
                  <span>{item.name}</span>
                  <span>Qty: {cartItems[item.id]}</span>
                  <span>Rs {item.new_price * cartItems[item.id]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}; 