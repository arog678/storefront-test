import { ImgHTMLAttributes } from 'react';

type ImgAttr = ImgHTMLAttributes<HTMLImageElement>;

export type ProductImageType = ImgAttr & Required<Pick<ImgAttr, 'src' | 'alt'>>;