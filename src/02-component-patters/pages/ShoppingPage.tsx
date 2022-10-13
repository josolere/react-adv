import React from "react";
import {
  ProductButton,
  ProductTitle,
  ProductCard,
  ProductImage,
} from "../components";

const product = {
  id: "1",
  title: "Coffee",
  img: "./coffee-mug.png",
};

export default function ShoppingPage() {
  return (
    <div>
      <h1>shpping store</h1>
      <hr />
      <div style={{ display: "flex" }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title="cafecito" />
          <ProductCard.Buttons />
        </ProductCard>
        
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButton />
        </ProductCard>
      </div>
    </div>
  );
}
