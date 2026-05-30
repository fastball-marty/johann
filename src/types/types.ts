export type ButtonProps = {
  children: string;
  onClick?: () => void;
};

export type PriceConversionItem = {
  quantity: string;
  unit: string;
  price: string;
};
