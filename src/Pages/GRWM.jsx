import React, { useState, useContext, useEffect } from "react";
import "./CSS/Checkout.css";
import all_product from "../Components/Assets/all_product";
import { ShopContext } from "../Contexts/ShopContext";

const videos = [
  {
    id: "1",
    title: "GRWM: For School",
    url: "https://youtube.com/shorts/3ERx59otQU8?si=yPPNltBMDjKBuXd6",
    thumb: "https://img.youtube.com/vi/3ERx59otQU8/hqdefault.jpg"
  },
  {
    id: "2",
    title: "GRWM for Winter",
    url: "https://youtube.com/shorts/hVqhaU2rv1o?si=RxeMBlCL259sxMKv",
    thumb: "https://img.youtube.com/vi/hVqhaU2rv1o/hqdefault.jpg"
  },
  {
    id: "3",
    title: "Place your orders now",
    url: "https://youtube.com/shorts/kavkH62P16o?si=LVLxiNnqIZYiBPDi",
    thumb: "https://img.youtube.com/vi/kavkH62P16o/hqdefault.jpg"
  },
  {
    id: "4",
    title: "Street Style Transformation",
    url: "https://youtube.com/shorts/bOuGaiHIgoY?si=e8XJadMIQc-ZkJCC",
    thumb: "https://img.youtube.com/vi/bOuGaiHIgoY/hqdefault.jpg"
  },
  {
    id: "5",
    title: "Outfit of the Day",
    url: "https://youtube.com/shorts/z6gmhM4AxvY?si=6CylHiGusodTGx-I",
    thumb: "https://img.youtube.com/vi/z6gmhM4AxvY/hqdefault.jpg"
  },
];

function getEmbedUrl(url) {
  // If it's a shorts URL, convert to embed
  const shortsMatch = url.match(/youtube\.com\/shorts\/([\w-]+)/);
  if (shortsMatch) {
    return `https://www.youtube.com/embed/${shortsMatch[1]}`;
  }
  return url;
}

// For demo, map each video to 3 featured products (could be random or fixed)
const videoFeatured = {
  "1": [all_product[0], all_product[1], all_product[2]],
  "2": [all_product[3], all_product[4], all_product[5]],
  "3": [all_product[6], all_product[7], all_product[8]],
  "4": [all_product[9], all_product[10], all_product[11]],
  "5": [all_product[12], all_product[13], all_product[14]],
};

// SVG for YouTube play overlay
const YoutubePlayIcon = () => (
  <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none'}}>
    <circle cx="27" cy="27" r="27" fill="rgba(0,0,0,0.45)"/>
    <path d="M38 27L22 36.3923V17.6077L38 27Z" fill="#fff"/>
  </svg>
);

export const GRWM = () => {
  const [selected, setSelected] = useState(videos[0]);
  const [toast, setToast] = useState("");
  const { addToCart } = useContext(ShopContext);
  const featured = videoFeatured[selected.id] || all_product.slice(0, 3);

  // Carousel state
  const windowSize = 4;
  const [carouselIndex, setCarouselIndex] = useState(0);
  const maxIndex = Math.max(0, videos.length - windowSize);
  // For smooth scroll, render all videos in a row and shift
  const thumbWidth = 180; // px, adjust to match your card size + gap
  const rowStyle = {
    display: 'flex',
    gap: 32,
    transform: `translateX(-${carouselIndex * (thumbWidth + 32)}px)` ,
    transition: 'transform 0.5s cubic-bezier(.77,0,.18,1)',
    width: videos.length * (thumbWidth + 32),
  };

  // Responsive: detect mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 700);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleBuyDrip = () => {
    featured.forEach(item => addToCart(item.id));
    setToast("Added all featured items to cart!");
    setTimeout(() => setToast(""), 1800);
  };

  const handlePrev = () => {
    setCarouselIndex(idx => idx === 0 ? maxIndex : idx - 1);
  };
  const handleNext = () => {
    setCarouselIndex(idx => idx === maxIndex ? 0 : idx + 1);
  };

  return (
    <div className="checkout-root grwm-section">
      <h1 className="graffiti-title" style={{fontSize: '100px',marginBottom: '60px'}}>Get Ready With Me</h1>
      <div style={{display: 'flex', gap: 32, justifyContent: 'center', marginBottom:80, alignItems: 'center'}}>
        {/* Desktop carousel with arrows */}
        {!isMobile && (
          <>
            <button
              onClick={handlePrev}
              style={{fontSize: 32, background: 'none', border: 'none', cursor: 'pointer', marginRight: 8}}
              aria-label="Previous"
            >
              &#8592;
            </button>
            <div className="grwm-carousel-outer" style={{width: (thumbWidth + 40) * windowSize, overflow: 'hidden', padding:25}}>
              <div className="grwm-carousel-row" style={rowStyle}>
                {videos.map(video => (
                  <div
                    key={video.id}
                    className={`grwm-thumb-card${selected.id === video.id ? ' grwm-thumb-active' : ''}`}
                    onClick={() => setSelected(video)}
                    style={{
                      cursor: 'pointer',
                      minWidth: thumbWidth,
                      maxWidth: thumbWidth,
                      borderRadius: 22,
                      background: 'white',
                      padding: 0,
                      border: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative',
                      transition: 'box-shadow 0.22s, transform 0.22s',
                      margin: '0 2px',
                      overflow: 'hidden',
                    }}
                    tabIndex={0}
                    aria-label={video.title}
                  >
                    <div style={{
                      position: 'relative',
                      width: '100%',
                      aspectRatio: '1/2',
                      background: '#222',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <img src={video.thumb} alt={video.title} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 22, display: 'block', filter: selected.id === video.id ? 'brightness(1.08)' : 'brightness(0.93)'}} />
                      <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', zIndex: 2}}>
                        <YoutubePlayIcon />
                      </div>
                    </div>
                    <div style={{padding: '16px 8px 14px', width: '100%', textAlign: 'center', background: 'none'}}>
                      <div style={{
                        fontWeight: 700,
                        fontSize: '1.13rem',
                        color: 'black',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        letterSpacing: '0.01em',
                        fontFamily: 'Montserrat, Arial, sans-serif',
                        minHeight: '2.5em',
                        lineHeight: '1.22',
                      }}>{video.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleNext}
              style={{fontSize: 32, background: 'none', border: 'none', cursor: 'pointer', marginLeft: 8}}
              aria-label="Next"
            >
              &#8594;
            </button>
          </>
        )}
        {/* Mobile: native horizontal scroll, 1.5 cards, no arrows */}
        {isMobile && (
          <div className="grwm-carousel-outer grwm-carousel-mobile">
            <div className="grwm-carousel-row grwm-carousel-row-mobile">
              {videos.map(video => (
                <div
                  key={video.id}
                  className={`grwm-thumb-card${selected.id === video.id ? ' grwm-thumb-active' : ''}`}
                  onClick={() => setSelected(video)}
                  style={{
                    cursor: 'pointer',
                    minWidth: '80vw',
                    maxWidth: '80vw',
                    borderRadius: 18,
                    background: 'white',
                    padding: 0,
                    border: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    transition: 'box-shadow 0.22s, transform 0.22s',
                    marginRight: '4vw',
                    overflow: 'hidden',
                    scrollSnapAlign: 'start',
                  }}
                  tabIndex={0}
                  aria-label={video.title}
                >
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '1/2',
                    background: '#222',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <img src={video.thumb} alt={video.title} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 18, display: 'block', filter: selected.id === video.id ? 'brightness(1.08)' : 'brightness(0.93)'}} />
                    <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', zIndex: 2}}>
                      <YoutubePlayIcon />
                    </div>
                  </div>
                  <div style={{padding: '12px 6px 10px', width: '100%', textAlign: 'center', background: 'none'}}>
                    <div style={{
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      color: 'black',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      letterSpacing: '0.01em',
                      fontFamily: 'Montserrat, Arial, sans-serif',
                      minHeight: '2.2em',
                      lineHeight: '1.18',
                    }}>{video.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {isMobile ? (
        <div style={{display: 'flex', flexDirection: 'column', gap: 32, alignItems: 'center'}}>
          {/* Video player first */}
          <div style={{width: '100%', maxWidth: 700, minWidth: 0}}>
            <div className="grwm-player-wrap">
              <div className="grwm-player-aspect">
                <iframe
                  key={selected.id}
                  src={getEmbedUrl(selected.url)}
                  title={selected.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="grwm-player"
                ></iframe>
              </div>
            </div>
            {toast && <div className="grwm-toast">{toast}</div>}
          </div>
          {/* Featured items below */}
          <div className="grwm-featured-list" style={{minWidth: 0, width: '100%', display: 'flex', flexDirection: 'column', gap: 18}}>
            <h3 style={{fontSize: '2.2rem', marginBottom: 12, color: '#ff2d55'}}>Featured in this video</h3>
            {featured.map(item => (
              <div key={item.id} className="grwm-featured-item" style={{display: 'flex', alignItems: 'center', gap: 12, background: '#fafafa', borderRadius: 10, padding: '8px 10px'}}>
                <img src={item.image} alt={item.name} style={{width: 48, height: 64, objectFit: 'cover', borderRadius: 8, background: '#eee'}} />
                <div style={{flex: 1}}>
                  <div style={{fontWeight: 600, fontSize: '1rem', color: '#181818', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.name}</div>
                  <div style={{color: '#ff2d55', fontWeight: 700, fontSize: '0.98rem'}}>Rs {item.new_price}</div>
                </div>
              </div>
            ))}
            <div style={{marginTop: 32, display: 'flex', justifyContent: 'center'}}>
              <button className="accent-btn" style={{fontSize: '1.1rem', padding: '14px 44px'}} onClick={handleBuyDrip}>Buy this drip</button>
            </div>
          </div>
        </div>
      ) : (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 60}}>
          {/* Featured items left */}
          <div className="grwm-featured-list" style={{minWidth: 220, display: 'flex', flexDirection: 'column', gap: 18}}>
            <h3 style={{fontSize: '2.2rem', marginBottom: 12, color: '#ff2d55'}}>Featured in this video</h3>
            {featured.map(item => (
              <div key={item.id} className="grwm-featured-item" style={{display: 'flex', alignItems: 'center', gap: 12, background: '#fafafa', borderRadius: 10, padding: '8px 10px'}}>
                <img src={item.image} alt={item.name} style={{width: 48, height: 64, objectFit: 'cover', borderRadius: 8, background: '#eee'}} />
                <div style={{flex: 1}}>
                  <div style={{fontWeight: 600, fontSize: '1rem', color: '#181818', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>{item.name}</div>
                  <div style={{color: '#ff2d55', fontWeight: 700, fontSize: '0.98rem'}}>Rs {item.new_price}</div>
                </div>
              </div>
            ))}
            <div style={{marginTop: 32, display: 'flex', justifyContent: 'center'}}>
              <button className="accent-btn" style={{fontSize: '1.1rem', padding: '14px 44px'}} onClick={handleBuyDrip}>Buy this drip</button>
            </div>
          </div>
          {/* Video player right */}
          <div style={{flex: 1, minWidth: 320, maxWidth: 700}}>
            <div className="grwm-player-wrap">
              <div className="grwm-player-aspect">
                <iframe
                  key={selected.id}
                  src={getEmbedUrl(selected.url)}
                  title={selected.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="grwm-player"
                ></iframe>
              </div>
            </div>
            {toast && <div className="grwm-toast">{toast}</div>}
          </div>
        </div>
      )}
    </div>
  );
}; 