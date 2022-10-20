import { useState } from "react";
import { IOnChangeArgs, IProductInCard } from "../interfaces/interface";

const useShoppingCart = () => {
  const [shoppingCard, setShoppingCard] = useState<{
    [key: string]: IProductInCard;
  }>({});

  const onProductCountChange = ({ count, product }: IOnChangeArgs): void => {
    setShoppingCard((oldShoppingCart) => {
      const productInCart: IProductInCard = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return {
        ...rest,
      };

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return {
      //     ...rest,
      //   };
      // }
      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    onProductCountChange,
    shoppingCard,
  };
};
export default useShoppingCart;
