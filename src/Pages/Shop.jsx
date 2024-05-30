import React from "react";
import { Hero } from "../Components/Hero/Hero";
import { Items } from "../Components/Items/Items";
import { Popular } from "../Components/Popular/Popular";
import { Offers } from "../Components/Offers/Offers";
import { NewCollections } from "../Components/NewCollections/NewCollections";
import { Newsletter } from "../Components/Newsletter/Newsletter";

export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offers/>
      <NewCollections/>
      <Newsletter/>
    </div>
  );
};
