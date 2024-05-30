import React, { useRef, useState } from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hero_video from "../Assets/promo4k.webm";
import { Link } from "react-router-dom";
export const Hero = () => {
  const videoRef = useRef(null);
  const [audioText, setAudioText] = useState("Audio On");
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      if (!videoRef.current.muted) {
        setAudioText("Audio Off");
      } else {
        setAudioText("Audio On");
      }
    }
  };

  return (
    <div className="hero">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="hero-video"
        controls={false}
      >
        <source src={hero_video} type="video/mp4" />
      </video>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <p>LOOK SHARP</p>
          <p>FEEL SHARP</p>
          <p>BE SHARP</p>
        </div>
        <Link style={{ textDecoration: "none" }} to="/api">
          <div className="hero-latest-button">
            <p>Latest Collection</p>
            <img src={arrow_icon} alt="" />
          </div>
        </Link>
      </div>
      <div className="hero-right">
        <p onClick={toggleMute} className="hero-unmute-button">
          {audioText}
        </p>
      </div>
    </div>
  );
};
