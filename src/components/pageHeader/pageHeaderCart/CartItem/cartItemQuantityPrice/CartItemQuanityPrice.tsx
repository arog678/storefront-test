import * as S from './cartItemQuantityPrice.styled';

interface CartItemQuantityPriceProps {
    quantity: number, 
    price: string
}

export const CartItemQuantityPrice = ({
    quantity,
    price
}: CartItemQuantityPriceProps) => {

    return (
        <S.PriceQuantityContainer>
            <S.QuantityLabel>{ quantity }</S.QuantityLabel>
            x 
            <S.PriceLabel>{ price }</S.PriceLabel> 
        </S.PriceQuantityContainer>
    );
};