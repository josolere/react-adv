import { useEffect, useRef, useState } from "react";
import {
  IInitialValues,
  IOnChangeArgs,
  IPropsProduct,
} from "../interfaces/interface";

interface IUseProductArgs {
  product: IPropsProduct;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
  initialValues?: IInitialValues;
}

const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: IUseProductArgs) => {
  const [count, setCount] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (values: number) => {
    const newValues = Math.max(
      initialValues?.maxCount !== count || values !== 1
        ? count + values
        : count,
      0
    );
    setCount(newValues);
    onChange && onChange({ count: newValues, product });
  };

  const reset = () => {
    setCount(initialValues?.count|| value)
  }

  useEffect(() => {
    if (!isMounted.current) return;
    setCount(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    count,
    increaseBy,
    maxCount: initialValues?.maxCount,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === count,
    reset
  };
};

export default useProduct;
