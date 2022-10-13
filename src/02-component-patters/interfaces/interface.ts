import { ReactElement } from "react";

export interface IProduct {
  product: IPropsProduct;
  children?: ReactElement | ReactElement[];
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
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
