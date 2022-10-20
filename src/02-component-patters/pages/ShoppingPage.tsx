import {
  ProductButton,
  ProductTitle,
  ProductCard,
  ProductImage,
} from "../components";
import { products } from "../data/products";
import useShoppingCart from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

export default function ShoppingPage() {
  const { shoppingCard, onProductCountChange } = useShoppingCart();

  return (
    <div>
      <h1>shpping store</h1>
      <hr />
      <div
        style={{
          display: "flex",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark"
            onChange={onProductCountChange}
            value={shoppingCard[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButton className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCard).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            style={{ width: "100px" }}
            onChange={onProductCountChange}
            value={product.count}
          >
            <ProductImage className="custom-image" />
            <ProductButton
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center}",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
}
