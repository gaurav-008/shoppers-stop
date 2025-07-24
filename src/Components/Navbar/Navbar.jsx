// Navbar.js

import React, { useState, useRef, useEffect, useContext } from "react";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ShopContext } from "../../Contexts/ShopContext";
import { isUserLoggedIn } from "../../Pages/LoginSignUp"; // If you have a heart.svg, otherwise use inline SVG

export const Navbar = ({ wishlistCount = 0, onWishlistClick = () => {} }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loggedIn, setLoggedIn] = useState(isUserLoggedIn());
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to determine active menu
  const getActiveMenu = () => {
    if (location.pathname === "/" || location.pathname.startsWith("/shop")) return "shop";
    if (location.pathname.startsWith("/women")) return "women";
    if (location.pathname.startsWith("/men")) return "men";
    if (location.pathname.startsWith("/kids")) return "kids";
    if (location.pathname.startsWith("/community")) return "community";
    if (location.pathname.startsWith("/grwm")) return "grwm";
    return "";
  };
  const activeMenu = getActiveMenu();

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

  const profileRef = useRef(null);

  useEffect(() => {
    if (!showProfile) return;
    const handleClick = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showProfile]);

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
        <li className={activeMenu === "shop" ? "active" : ""}>
          <Link to="/" onClick={() => setShowMenu(false)}>
            Home
          </Link>
        </li>
        <li className={activeMenu === "women" ? "active" : ""}>
          <Link to="/women" onClick={() => setShowMenu(false)}>
            Chic
          </Link>
        </li>
        <li className={activeMenu === "men" ? "active" : ""}>
          <Link to="/men" onClick={() => setShowMenu(false)}>
            Chap
          </Link>
        </li>
        <li className={activeMenu === "kids" ? "active" : ""}>
          <Link to="/kids" onClick={() => setShowMenu(false)}>
            Chico
          </Link>
        </li>
        <li className={activeMenu === "community" ? "active" : ""}>
          <Link to="/community" onClick={() => setShowMenu(false)} style={{color: 'red'}}>
            #GENZGLAM
          </Link>
        </li>
        <li className={activeMenu === "grwm" ? "active" : ""}>
          <Link to="/grwm" onClick={() => setShowMenu(false)} style={{color: 'purple'}}>
          #GRWM
          </Link>
        </li>
        <li className={activeMenu === "genz" ? "active" : ""}>
          <Link to="/genz" onClick={() => setShowMenu(false)} style={{color: '#144d2b'}}>
            #GENZCARD
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
              <div className="nav-profile-popup" ref={profileRef}>
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
