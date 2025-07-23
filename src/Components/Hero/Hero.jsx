import React, { useRef, useState } from "react";
import "./Hero.css";
import hero from "../Assets/pro.mp4";
import hero_video from "../Assets/promo4k-ezgif.com-gif-maker.webm";
import { Link } from "react-router-dom";
import arrow_icon from "../Assets/arrow.png";
export const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Scroll to next section
  const handleScrollDown = () => {
    const hero = document.getElementById('hero');
    if (hero) {
      const next = hero.nextElementSibling;
      if (next) {
        const y = next.getBoundingClientRect().top + window.pageYOffset - 64; // 64px offset for navbar
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="hero" id="hero">
       <video
  ref={videoRef}
  autoPlay
  loop
  muted
  playsInline
  controls={false}
  preload="none"
  poster="/brand.png"
  className="hero-video"
>

<source src={hero} type="video/mp4" />
        <source src={hero_video} type="video/mp4" />
      </video>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <p>LOOK CHIC</p>
          <p>FEEL CHAP</p>
          <p>BE CHICO</p>
        </div>
        <button
          className="hero-latest-button"
          style={{ textDecoration: 'none', border: 'none',  cursor: 'pointer' }}
          onClick={() => {
            const el = document.getElementById('featured-collection');
            if (el) {
              const y = el.getBoundingClientRect().top + window.pageYOffset - 64; // 64px offset for navbar
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
        >
          <p style={{letterSpacing: '3px'}}>Featured Collection</p>
          <img src={arrow_icon} alt="" />
        </button>
      </div>
      <div className="hero-controls">
        <button onClick={toggleMute} className="hero-mute-button">
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
      </div>
      {/* Scroll down arrow */}
      <button className="hero-scroll-down" onClick={handleScrollDown} aria-label="Scroll to next section">
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="27" cy="27" r="27" fill="rgba(0,0,0,0.32)"/>
          <path d="M17 24l10 10 10-10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};
