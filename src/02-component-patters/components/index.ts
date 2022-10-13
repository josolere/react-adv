import { ProductCard as ProductCardHOC } from "./ProductCard";
import { IProductCardHOCProps } from "../interfaces/interface";
import { ProductButton } from "./ProductButton";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";

export { ProductButton } from "./ProductButton";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: IProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButton,
});

export default ProductCard;
