import {
  ProductButton,
  ProductTitle,
  ProductCard,
  ProductImage,
} from "../components";
import { products } from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];
export default function ShoppingPage() {
  return (
    <div>
      <h1>shopping store</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, countCard, isMaxCountReached }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white text-bold" />
            <ProductButton className="custom-buttons" />

            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <p className="text-white">{countCard}</p>
          </>
        )}
      </ProductCard>
    </div>
  );
}
