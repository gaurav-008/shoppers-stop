// Navbar.js

import React, { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Contexts/ShopContext";
import { isUserLoggedIn } from "../../Pages/LoginSignUp"; // If you have a heart.svg, otherwise use inline SVG

export const Navbar = ({ wishlistCount = 0, onWishlistClick = () => {} }) => {
  const [menu, setMenu] = useState("shop");
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(isUserLoggedIn());
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const { getTotalCartItems } = useContext(ShopContext);
  const cartCount = getTotalCartItems ? getTotalCartItems() : 0;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkLogin = () => setLoggedIn(isUserLoggedIn());
    window.addEventListener('storage', checkLogin);
    const interval = setInterval(checkLogin, 500);
    return () => {
      window.removeEventListener('storage', checkLogin);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false);
    setShowProfile(false);
  };
  const handleOrders = () => {
    setShowProfile(false);
    navigate('/orders');
  };

  return (
    <div className={`navbar fade-in${scrolled ? " navbar-scrolled" : ""} ${showMenu ? "responsive" : ""}`}>
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="nav-logo">
        <img src="https://chicchaps.com/wp-content/uploads/2025/01/cropped-CHIC-CHAPS-2-242x300.png" alt="ChicChaps Logo" className="nav-logo-img" style={{height: 40, width: 'auto', objectFit: 'contain'}} loading="lazy" />

          <p>ChicChaps</p>
        </div>
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-menu ${showMenu ? "show" : ""}`}>
        <li onClick={() => setMenu("shop")}
            className={menu === "shop" ? "active" : ""}>
          <Link to="/" onClick={() => setShowMenu(false)}>
            Home
          </Link>
        </li>
        <li onClick={() => setMenu("women")}
            className={menu === "women" ? "active" : ""}>
          <Link to="/women" onClick={() => setShowMenu(false)}>
            Chic
          </Link>
        </li>
        <li onClick={() => setMenu("men")}
            className={menu === "men" ? "active" : ""}>
          <Link to="/men" onClick={() => setShowMenu(false)}>
            Chap
          </Link>
        </li>
        <li onClick={() => setMenu("kids")}
            className={menu === "kids" ? "active" : ""}>
          <Link to="/kids" onClick={() => setShowMenu(false)}>
            Chico
          </Link>
        </li>
        <li onClick={() => setMenu("community")}
            className={menu === "community" ? "active" : ""}>
          <Link to="/community" onClick={() => setShowMenu(false)} style={{color: 'red'}}>
            #GENZGLAM
          </Link>
        </li>
        <li onClick={() => setMenu("grwm")}
            className={menu === "grwm" ? "active" : ""}>
          <Link to="/grwm" onClick={() => setShowMenu(false)} style={{color: 'purple'}}>
          #GRWM
          </Link>
        </li>
      </ul>
      <div className={`nav-login-cart ${showMenu ? "show" : ""}`}>
      <button className="nav-wishlist-btn" aria-label="Wishlist" onClick={onWishlistClick}>
          <img src={require('../Assets/icons8-heart-40.png')} alt="Wishlist" style={{width: 28, height: 28, objectFit: 'contain'}} loading="lazy" />
          {wishlistCount > 0 && <span className="nav-wishlist-count">{wishlistCount}</span>}
        </button>
        {loggedIn ? (
          <div className="nav-profile-icon" title="Profile" style={{fontSize: '2rem', marginRight: 12, cursor: 'pointer', display: 'flex', alignItems: 'center'}} onClick={() => setShowProfile(v => !v)}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="12" r="6" stroke="#111" strokeWidth="2"/>
              <path d="M6 26c0-4 4.477-7 10-7s10 3 10 7" stroke="#111" strokeWidth="2" fill="none"/>
            </svg>
            {showProfile && (
              <div className="nav-profile-popup">
                <div className="nav-profile-title">Profile</div>
                <div className="nav-profile-detail"><b>Email:</b> test@test.com</div>
                <button className="nav-profile-orders" onClick={handleOrders}>My Orders</button>
                <button className="nav-profile-logout" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="accent-btn">Login</button>
          </Link>
        )}
        <div className="nav-cart-icon" onClick={() => navigate('/cart')} style={{position: 'relative'}}>
          <img src={require("../Assets/cart_icon.png")} alt="Cart" style={{width: 32, height: 32}} loading="lazy" />
          {cartCount > 0 && <span className="nav-cart-count-badge">{cartCount}</span>}
        </div>
      </div>
    </div>
  );
};
