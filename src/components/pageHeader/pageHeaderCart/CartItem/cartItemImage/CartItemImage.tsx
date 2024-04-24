import { ProductImageType } from "../../../../../types/imgType";
import * as S from './cartItemImage.styled';

interface CartItemImageProps {
    productImage: ProductImageType;
};

export const CartItemImage = ({
    productImage
}: CartItemImageProps) => {

    return (
        <S.ItemImage 
            {...productImage}
        />
    );
}; 