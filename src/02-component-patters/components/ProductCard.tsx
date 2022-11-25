import React, { createContext } from "react";
import useProduct from "../hooks/useProduct";
import { IProduct, IProductContextProps } from "../interfaces/interface";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as IProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues,
}: IProduct) => {
  const { count, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });
  return (
    <Provider
      value={{
        count,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          countCard:count,
          isMaxCountReached,
          maxCount,
          product,
          reset,
          increaseBy,
        })}
      </div>
    </Provider>
  );
};
