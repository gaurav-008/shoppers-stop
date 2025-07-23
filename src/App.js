import "./App.css";
import React, { useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignUp } from "./Pages/LoginSignUp";
import { Footer } from "./Components/Footer/Footer";

import { MockAPI } from "./Components/MockAPI/MockAPI";
import { Community } from "./Pages/Community";
import { Checkout } from "./Pages/Checkout";
import { Orders } from "./Pages/Orders";
import { GRWM } from "./Pages/GRWM";
import all_product from "./Components/Assets/all_product";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardPage from "./Components/GenzCard/CardPage";
// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}
function App() {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem('wishlist');
    return stored ? JSON.parse(stored) : [];
  });
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const addToWishlist = (id) => {
    setWishlist(prev => {
      if (prev.includes(id)) return prev;
      const updated = [...prev, id];
      localStorage.setItem('wishlist', JSON.stringify(updated));
      return updated;
    });
  };
  const removeFromWishlist = (id) => {
    setWishlist(prev => {
      const updated = prev.filter(pid => pid !== id);
      localStorage.setItem('wishlist', JSON.stringify(updated));
      return updated;
    });
  };
  const wishlistProducts = all_product.filter(p => wishlist.includes(p.id));
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar wishlistCount={wishlist.length} onWishlistClick={() => setWishlistOpen(true)} />
        {wishlistOpen && (
          <div className="wishlist-sidebar-overlay" onClick={() => setWishlistOpen(false)}>
            <div className="wishlist-sidebar" onClick={e => e.stopPropagation()}>
              <div className="wishlist-sidebar-header">
                <h2>My Wishlist</h2>
                <button className="wishlist-sidebar-close" onClick={() => setWishlistOpen(false)}>&times;</button>
              </div>
              <div className="wishlist-sidebar-list">
                {wishlistProducts.length === 0 ? (
                  <div className="wishlist-sidebar-empty">No products in wishlist.</div>
                ) : wishlistProducts.map(product => (
                  <Link to={`/product/${product.id}`} key={product.id} className="wishlist-sidebar-link" style={{textDecoration: 'none'}} onClick={() => setWishlistOpen(false)}>
                    <div className="wishlist-sidebar-item">
                      <img src={product.image} alt={product.name} className="wishlist-sidebar-img" />
                      <div className="wishlist-sidebar-info">
                        <div className="wishlist-sidebar-name">{product.name}</div>
                        <div className="wishlist-sidebar-price">Rs {product.new_price}</div>
                      </div>
                      <button className="wishlist-sidebar-remove" onClick={e => { e.preventDefault(); removeFromWishlist(product.id); }}>&times;</button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Shop onAddWishlist={addToWishlist} onRemoveWishlist={removeFromWishlist} wishlist={wishlist} />} />
          <Route path="/men" element={<ShopCategory category="men" onAddWishlist={addToWishlist} onRemoveWishlist={removeFromWishlist} wishlist={wishlist} />} />
          <Route path="/women" element={<ShopCategory category="women" onAddWishlist={addToWishlist} onRemoveWishlist={removeFromWishlist} wishlist={wishlist} />} />
          <Route path="/kids" element={<ShopCategory category="kid" onAddWishlist={addToWishlist} onRemoveWishlist={removeFromWishlist} wishlist={wishlist} />} />
          <Route path="/community" element={<Community />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/grwm" element={<GRWM />} />
          <Route path="/product" element={<Product />}> <Route path=":productId" element={<Product />} /> </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/api" element={<MockAPI/>} />
          <Route path="/genz" element={<CardPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
