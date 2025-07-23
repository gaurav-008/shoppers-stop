import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer-vogue">
      <div className="footer-vogue-main">
        <div className="footer-vogue-left">
          <div className="footer-vogue-logo">CHICCHAPS</div>
          <div className="footer-vogue-desc">
            The latest fashion news, beauty coverage, celebrity style, fashion week updates, culture reviews, and videos on CHICCHAPS.
          </div>
          <div className="footer-vogue-social">
            <a href="#" aria-label="Facebook" className="footer-vogue-social-icon">
              <img src={require("../Assets/instagram_icon.png")} alt="Facebook" />
            </a>
            <a href="#" aria-label="X" className="footer-vogue-social-icon">
              <img src={require("../Assets/whatsapp_icon.png")} alt="X" />
            </a>
            <a href="#" aria-label="Pinterest" className="footer-vogue-social-icon">
              <img src={require("../Assets/pintester_icon.png")} alt="Pinterest" />
            </a>
            <a href="#" aria-label="Instagram" className="footer-vogue-social-icon">
              <img src={require("../Assets/instagram_icon.png")} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="footer-vogue-links">
          <div className="footer-vogue-links-col">
            <div className="footer-vogue-links-title">MORE FROM CHICCHAPS</div>
            <ul>
              <li>Newsletter</li>
              <li>Manage Account</li>
              <li>Verify Subscription</li>
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Projects</li>
              <li>Archive</li>
              <li>College of Fashion</li>
            </ul>
          </div>
          <div className="footer-vogue-links-col">
            <div className="footer-vogue-links-title">SEE MORE STORIES</div>
            <ul>
              <li>Fashion</li>
              <li>Beauty</li>
              <li>Culture</li>
              <li>Living</li>
              <li>Runway</li>
              <li>Shopping</li>
              <li>Magazine</li>
              <li>Gift Guides</li>
              <li>Best of Sale</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-vogue-bottom">
        <div className="footer-vogue-legal-links">
          <span>USER AGREEMENT</span>
          <span>|</span>
          <span>PRIVACY POLICY</span>
          <span>|</span>
          <span>YOUR CALIFORNIA PRIVACY RIGHTS</span>
          <span>|</span>
          <span>ACCESSIBILITY HELP</span>
          <span>|</span>
          <span>MASTHEAD</span>
          <span>|</span>
          <span>VISUAL STORIES</span>
        </div>
        <div className="footer-vogue-country">CHICCHAPS &copy; {new Date().getFullYear()} | India</div>
      </div>
    </footer>
  );
};
