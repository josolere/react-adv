import { useEffect, useState } from "react";
import { IOnChangeArgs, IPropsProduct } from "../interfaces/interface";

interface IUseProductArgs {
  product: IPropsProduct;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
}

const useProduct = ({ onChange, product, value = 0 }: IUseProductArgs) => {
  const [count, setCount] = useState<number>(value);

  const increaseBy = (values: number) => {
    const newValues = Math.max(count + values, 0);
    setCount(newValues);
    onChange && onChange({ count: newValues, product });
  };

  useEffect(() => {
    setCount(value);
  }, [value]);

  return { count, increaseBy };
};

export default useProduct;
