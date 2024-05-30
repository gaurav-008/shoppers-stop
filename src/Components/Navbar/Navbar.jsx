// Navbar.js

import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Contexts/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <div className={`navbar ${showMenu ? "responsive" : ""}`}>
      <Link style={{ textDecoration: "none" }} to="/">
        <div className="nav-logo">
          <img src={logo} alt=" "></img>
          <p>SHOPPER</p>
        </div>
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={`nav-menu ${showMenu ? "show" : ""}`}>
        <li onClick={() => setMenu("shop")}>
          <Link
            style={{ textDecoration: "none" }}
            to="/"
            onClick={() => setShowMenu(false)}
          >
            Shop
          </Link>
          {menu === "shop" ? <hr></hr> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link
            style={{ textDecoration: "none" }}
            to="/men"
            onClick={() => setShowMenu(false)}
          >
            Men
          </Link>{" "}
          {menu === "men" ? <hr></hr> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link
            style={{ textDecoration: "none" }}
            to="/women"
            onClick={() => setShowMenu(false)}
          >
            Women
          </Link>{" "}
          {menu === "women" ? <hr></hr> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link
            style={{ textDecoration: "none" }}
            to="/kids"
            onClick={() => setShowMenu(false)}
          >
            Kids
          </Link>{" "}
          {menu === "kids" ? <hr></hr> : <></>}
        </li>
      </ul>
      <div className={`nav-login-cart ${showMenu ? "show" : ""}`}>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <div className="cart-icon">
          <Link to="/cart">
            <img src={cart_icon} alt=" " />
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};
