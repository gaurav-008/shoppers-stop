import React, { useContext } from 'react'
import { ShopContext } from "../Contexts/ShopContext";
import { useParams } from 'react-router-dom';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((p)=>p.id == productId)
  return (
    <div>
      <ProductDisplay product={product}/>
    </div>
  )
}
