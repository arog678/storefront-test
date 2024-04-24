import { useContext } from 'react';
import * as S from './productAddToCartButton.styled';
import { CartContext } from '../../../context/CartContext';
import { addCartItem } from '../../../utils/addCartItem';

export const ProductAddToCartButton = () => {

    const cartCtx = useContext(CartContext);

    return (
        <S.AddToCartButton onClick={() => {
            addCartItem(cartCtx);
        }}>
            Add to cart
        </S.AddToCartButton>
    )
};