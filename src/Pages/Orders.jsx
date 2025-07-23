import React, { useEffect, useState } from "react";
import "./CSS/Checkout.css";

export const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(stored);
  }, []);

  return (
    <div className="checkout-root">
      <h1 className="checkout-title">My Orders</h1>
      {orders.length === 0 ? (
        <div style={{marginTop: 48, color: '#888', fontSize: '1.1rem'}}>No orders yet.</div>
      ) : (
        <div className="orders-list">
          {orders.map((order, idx) => (
            <div className="order-card" key={idx}>
              <div className="order-header-row">
                <div className="order-title">Order #{orders.length - idx}</div>
                <span className={`order-status order-status-${order.status?.toLowerCase()}`}>{order.status}</span>
              </div>
              <div className="order-header">
                <span><b>Order Date:</b> {new Date(order.date).toLocaleString()}</span>
                <span><b>Delivery:</b> {order.deliveryEstimate}</span>
              </div>
              <div className="order-address">
                <b>Address:</b> {order.address.name}, {order.address.address}, {order.address.city}, {order.address.zip}
              </div>
              <div className="order-items-title">Items:</div>
              <ul className="checkout-items-list">
                {order.items.map(item => (
                  <li key={item.id} className="checkout-item-row order-item-row">
                    <img src={item.image} alt={item.name} className="order-item-img-lg" />
                    <div className="order-item-info">
                      <div className="order-item-name">{item.name}</div>
                      <div className="order-item-meta">Qty: {item.qty} &nbsp;|&nbsp; Rs {item.price * item.qty}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}; 