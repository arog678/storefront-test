import * as S from './productImage.styled';
import { ProductImageType } from '../../../types/imgType';

interface ProductImageProps {
    productImage: ProductImageType;
};

export const ProductImage = ({productImage}: ProductImageProps) => {

    return <S.ProductImageItem
        {...productImage}
    />
};