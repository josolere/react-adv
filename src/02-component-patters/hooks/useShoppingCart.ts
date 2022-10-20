import { useState } from "react";
import { IOnChangeArgs, IProductInCard } from "../interfaces/interface";

const useShoppingCart = () => {
  const [shoppingCard, setShoppingCard] = useState<{
    [key: string]: IProductInCard;
  }>({});

  const onProductCountChange = ({ count, product }: IOnChangeArgs): void => {
    setShoppingCard((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return {
          ...rest,
        };
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    onProductCountChange,
    shoppingCard,
  };
};
export default useShoppingCart;
