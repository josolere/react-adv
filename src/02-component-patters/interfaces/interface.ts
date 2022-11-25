// import { ReactElement } from "react";
import { IButtonsProps } from "../components/ProductButton";
import { IImageProps } from "../components/ProductImage";
import { ITitleProps } from "../components/ProductTitle";

export interface IProduct {
  product: IPropsProduct;
  // children?: ReactElement | ReactElement[];
  children: (args: IProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: IOnChangeArgs) => void;
  value?: number;
  initialValues?: IInitialValues;
}

export interface IInitialValues {
  count?: number;
  maxCount?: number;
}

export interface IPropsProduct {
  id: string;
  title: string;
  img?: string;
}

export interface IProductContextProps {
  count: number;
  product: IPropsProduct;
  maxCount?: number;
  increaseBy: (value: number) => void;
}

export interface IProductCardHOCProps {
  ({ product, children }: IProduct): JSX.Element;
  Title: (Props: ITitleProps) => JSX.Element;
  Image: (Props: IImageProps) => JSX.Element;
  Buttons: (Props: IButtonsProps) => JSX.Element;
}

export interface IOnChangeArgs {
  product: IPropsProduct;
  count: number;
}

export interface IProductInCard extends IPropsProduct {
  count: number;
}

export interface IProductCardHandlers {
  countCard: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: IPropsProduct;
  increaseBy: (value:number) => void;
  reset: () => void;
}
