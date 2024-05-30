import React, { useContext } from "react";
import "./ShopCategory.css";
import { ShopContext } from "../../Contexts/ShopContext";
import dropdown_icon from "../../Components/Assets/dropdown_icon.png"
import { Items } from "../../Components/Items/Items";
export const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopCategory-banner" src={banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopCategory-products">
        {all_product.map(({ category: itemCategory, ...restProps }, i) => (category === itemCategory) &&
          <Items
            key={i}
            {...restProps}
          />
        )}
      </div>
      <div className="shopCategory-loadMore">Explore More</div>
    </div>
  );
};
