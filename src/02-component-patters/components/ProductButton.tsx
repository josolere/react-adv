import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface IButtonsProps {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButton = ({ className, style }: IButtonsProps) => {
  const { increaseBy, count, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && count === maxCount,
    [count, maxCount]
  );

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}>{count}</div>
      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() && styles.disabled
        }`}
        onClick={() => {
          count !== maxCount && increaseBy(1);
        }}
      >
        +
      </button>
    </div>
  );
};
