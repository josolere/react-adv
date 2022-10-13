import React, { createContext } from "react";
import useProduct from "../hooks/useProduct";
import { IProduct, IProductContextProps } from "../interfaces/interface";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: IProduct) => {
  const { count, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        count,
        increaseBy,
        product,
      }}
    >
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
