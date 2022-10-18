import React from "react";
import {
  ProductButton,
  ProductTitle,
  ProductCard,
  ProductImage,
} from "../components";
import "../styles/custom-styles.css";

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
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image />
          <ProductCard.Title title="cafecito" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white text-bold" />
          <ProductButton className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductImage
            style={{
              boxShadow: "10px 10px 10px rgba(0,0,0,0.2)",
            }}
          />
          <ProductTitle style={{ fontWeight: "bold" }} />
          <ProductButton style={{ display: "flex", justifyContent: "end" }} />
        </ProductCard>
      </div>
    </div>
  );
}
