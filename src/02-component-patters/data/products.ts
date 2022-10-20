import { IPropsProduct } from "../interfaces/interface";

const product1 = {
  id: "1",
  title: "Coffee",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "Coffee-meme",
  img: "./coffee-mug2.png",
};

export const products: IPropsProduct[] = [product1, product2];
