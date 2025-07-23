import React, { useContext, useState, useRef, useEffect, useLayoutEffect } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../Contexts/ShopContext";
import { Items } from "../../Components/Items/Items";
import dropdown_icon from "../../Components/Assets/dropdown_icon.png";

export const ShopCategory = ({ banner, category, onAddWishlist, onRemoveWishlist, wishlist = [] }) => {
  const { all_product } = useContext(ShopContext);
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [showSort, setShowSort] = useState(false);
  const sortRef = useRef();

  // Filter state
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedFabrics, setSelectedFabrics] = useState([]);
  const [selectedStyles, setSelectedStyles] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filterOpen, setFilterOpen] = useState(window.innerWidth > 767);

  // Close sort dropdown on outside click
  useEffect(() => {
    if (!showSort) return;
    const handleClick = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setShowSort(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showSort]);

  // Get unique filter options from products
  const productsOfCategory = all_product.filter(item => item.category === category);
  const allColors = Array.from(new Set(productsOfCategory.map(p => p.color))).filter(Boolean);
  const allFabrics = Array.from(new Set(productsOfCategory.map(p => p.fabric))).filter(Boolean);
  const allStyles = Array.from(new Set(productsOfCategory.map(p => p.style))).filter(Boolean);
  const allCategories = Array.from(new Set(all_product.map(p => p.category))).filter(Boolean);
  const minPrice = Math.min(...productsOfCategory.map(p => p.new_price));
  const maxPrice = Math.max(...productsOfCategory.map(p => p.new_price));

  // Filtering logic
  let filteredProducts = productsOfCategory;
  if (search) {
    filteredProducts = filteredProducts.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
  }
  filteredProducts = filteredProducts.filter(item => item.new_price >= priceRange[0] && item.new_price <= priceRange[1]);
  if (selectedColors.length)
    filteredProducts = filteredProducts.filter(item => selectedColors.includes(item.color));
  if (selectedFabrics.length)
    filteredProducts = filteredProducts.filter(item => selectedFabrics.includes(item.fabric));
  if (selectedStyles.length)
    filteredProducts = filteredProducts.filter(item => selectedStyles.includes(item.style));
  if (selectedCategories.length)
    filteredProducts = filteredProducts.filter(item => selectedCategories.includes(item.category));
  if (sort === "price-asc") filteredProducts = [...filteredProducts].sort((a, b) => a.new_price - b.new_price);
  if (sort === "price-desc") filteredProducts = [...filteredProducts].sort((a, b) => b.new_price - a.new_price);
  if (sort === "name-asc") filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  if (sort === "name-desc") filteredProducts = [...filteredProducts].sort((a, b) => b.name.localeCompare(a.name));

  const loadMore = () => {
    setVisibleProducts(prev => prev + 12);
  };

  // H&M hero assets
  const heroAssets = {
    women: {
      type: 'image',
      src: 'https://image.hm.com/content/dam/hm/TOOLBOX/Local%20Activities/2024_s09/july_2025/W30-REAS-WS32NN-A-16x9.jpg?imwidth=4800',
    },
    men: {
      type: 'image',
      src: 'https://image.hm.com/content/dam/global_campaigns/season_02/men/start-page-assets/w29/MS32LH7-16x9-Startpage-Teaser-1-w29.jpg?imwidth=4800',
    },
    kids: {
      type: 'video',
      src: 'https://image.hm.com/content/dam/global_campaigns/season_02/kids/start-page-assets/w29/KS32O-9x16-video-kids-start-page-prio-week-29.mp4',
    },
  };
  const lowerCategory = category.toLowerCase();
  const heroKey = lowerCategory === 'kid' ? 'kids' : lowerCategory;
  const hero = heroAssets[heroKey];

  // Filter UI handlers
  const handleCheckbox = (value, selected, setSelected) => {
    setSelected(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
  };
  const handlePriceSlider = (e) => {
    const val = Number(e.target.value);
    setPriceRange([minPrice, val]);
  };
  const handlePriceMin = (e) => {
    const val = Math.min(Number(e.target.value), priceRange[1]);
    setPriceRange([val, priceRange[1]]);
  };
  const handlePriceMax = (e) => {
    const val = Math.max(Number(e.target.value), priceRange[0]);
    setPriceRange([priceRange[0], val]);
  };
  const resetFilters = () => {
    setPriceRange([minPrice, maxPrice]);
    setSelectedColors([]);
    setSelectedFabrics([]);
    setSelectedStyles([]);
    setSelectedCategories([]);
  };

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice, category]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) setFilterOpen(true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when sidebar is open
  useLayoutEffect(() => {
    if (filterOpen) {
      document.body.classList.add('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-open');
    }
    return () => document.body.classList.remove('sidebar-open');
  }, [filterOpen]);

  // Minimal filter icon SVG
  const FilterIcon = ({ style = {}, ...props }) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={style} {...props}>
      <rect width="28" height="28" rx="8" fill="#222"/>
      <path d="M8 11h12M10 15h8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div className="shop-category">
      {hero && (
        <div className="shop-category-hero">
          {hero.type === 'image' ? (
            <img src={hero.src} alt={category + ' hero'} className="shop-category-hero-media" />
          ) : (
            <video className="shop-category-hero-media" src={hero.src} autoPlay loop muted playsInline />
          )}
          <div className="shop-category-hero-title graffiti-title">
            {category.charAt(0).toUpperCase() + category.slice(1)}'s Collection
          </div>
        </div>
      )}
      <div className="shop-category-main">
       
        {filterOpen && (
          <>
            <div className="shop-category-filter-backdrop" onClick={() => setFilterOpen(false)} />
            <aside className="shop-category-filter-sidebar always-open">
            {/* Close button for mobile sidebar */}
            <button
              className="filter-sidebar-close"
              style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', fontSize: 32, color: '#222', cursor: 'pointer', zIndex: 10 }}
              onClick={() => setFilterOpen(false)}
              aria-label="Close filters"
            >
              &times;
            </button>
            <div className="filter-heading" style={{paddingRight: 36}}>Filter</div>
            <hr className="filter-separator" />
            <div className="filter-section">
              <div className="filter-title">Price</div>
              <div className="filter-price-range">
                <input
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  value={priceRange[1]}
                  onChange={handlePriceSlider}
                  className="filter-range"
                />
                <div className="filter-price-values">
                  <span>Rs {minPrice}</span>
                  <span>-</span>
                  <input
                    type="number"
                    min={minPrice}
                    max={maxPrice}
                    value={priceRange[1]}
                    onChange={e => setPriceRange([minPrice, Number(e.target.value)])}
                    className="filter-price-input"
                  />
                  <span>(Max)</span>
                </div>
              </div>
            </div>
            <div className="filter-section">
              <div className="filter-title">Color</div>
              {allColors.map(color => (
                <label key={color} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedColors.includes(color)}
                    onChange={() => handleCheckbox(color, selectedColors, setSelectedColors)}
                  />
                  {color}
                </label>
              ))}
            </div>
            <div className="filter-section">
              <div className="filter-title">Fabric</div>
              {allFabrics.map(fabric => (
                <label key={fabric} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedFabrics.includes(fabric)}
                    onChange={() => handleCheckbox(fabric, selectedFabrics, setSelectedFabrics)}
                  />
                  {fabric}
                </label>
              ))}
            </div>
            <div className="filter-section">
              <div className="filter-title">Style</div>
              {allStyles.map(style => (
                <label key={style} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedStyles.includes(style)}
                    onChange={() => handleCheckbox(style, selectedStyles, setSelectedStyles)}
                  />
                  {style}
                </label>
              ))}
            </div>
            <div className="filter-section">
              <div className="filter-title">Category</div>
              {allCategories.map(cat => (
                <label key={cat} className="filter-checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCheckbox(cat, selectedCategories, setSelectedCategories)}
                  />
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </label>
              ))}
            </div>
            <button className="filter-reset-btn" onClick={resetFilters}>Reset Filters</button>
          </aside>
          </>
        )}
        <main className="shop-category-content">
          <div className="shop-category-controls fade-in">
            {/* Search input always on its own line */}
            <div className="shop-category-search-row">
              <input
                type="text"
                className="shop-category-search"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            {/* On mobile, filter and sort side by side; on desktop, just sort */}
            <div className="shop-category-filter-sort-row">
              {/* Minimal filter icon, only on mobile */}
              <span
                className="shop-category-filter-icon"
                style={{ display: window.innerWidth <= 700 ? 'flex' : 'none', alignItems: 'center', cursor: 'pointer', marginRight: 8 }}
                onClick={() => setFilterOpen(true)}
                tabIndex={0}
                aria-label="Show filters"
              >
                <FilterIcon />
              </span>
              <div className="shopCategory-sort" ref={sortRef} onClick={() => setShowSort(s => !s)}>
                Sort by <img src={dropdown_icon} alt="Sort" />
                {showSort && (
                  <div className="shopCategory-sort-dropdown">
                    <div onClick={() => { setSort("price-asc"); setShowSort(false); }}>Price: Low to High</div>
                    <div onClick={() => { setSort("price-desc"); setShowSort(false); }}>Price: High to Low</div>
                    <div onClick={() => { setSort("name-asc"); setShowSort(false); }}>Name: A-Z</div>
                    <div onClick={() => { setSort("name-desc"); setShowSort(false); }}>Name: Z-A</div>
                  </div>
                )}
              </div>
            </div>
          </div>
      <div className="shop-category-controls fade-in">
        <p>
          <span>Showing 1-{Math.min(visibleProducts, filteredProducts.length)}</span> out of {filteredProducts.length} products
        </p>
      </div>
      <div className="shop-category-products">
        {filteredProducts.slice(0, visibleProducts).map((item, i) => (
          <Items
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
                onAddWishlist={onAddWishlist}
                onRemoveWishlist={onRemoveWishlist}
                isWishlisted={wishlist.includes(item.id)}
          />
        ))}
      </div>
      {visibleProducts < filteredProducts.length && (
        <div className="shop-category-loadmore">
          <button onClick={loadMore} className="accent-btn">
            Load More
          </button>
        </div>
      )}
        </main>
      </div>
    </div>
  );
};
