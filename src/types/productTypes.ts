import { formatProductData } from "../utils/formatProductData";

export type ProductTypeRaw = {
  id: number;
  title: string;
  description: string;
  price: number;
  imageURL: string;
  sizeOptions: {
    id: number;
    label: string;
  }[];
};

export type ProductType = ReturnType<typeof formatProductData>;
export type SizeOptionType = ProductType['sizeOptions'][number];
export type SizeOptionID = SizeOptionType['id'];