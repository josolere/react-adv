import { ReactElement } from "react";
import { IButtonsProps } from "../components/ProductButton";
import { IImageProps } from "../components/ProductImage";
import { ITitleProps } from "../components/ProductTitle";

export interface IProduct {
  product: IPropsProduct;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
}

export interface IPropsProduct {
  id: string;
  title: string;
  img?: string;
}

export interface IProductContextProps {
  count: number;
  increaseBy: (value: number) => void;
  product: IPropsProduct;
}

export interface IProductCardHOCProps {
  ({ product, children }: IProduct): JSX.Element;
  Title: (Props: ITitleProps) => JSX.Element;
  Image: (Props: IImageProps) => JSX.Element;
  Buttons: (Props: IButtonsProps) => JSX.Element;
}
