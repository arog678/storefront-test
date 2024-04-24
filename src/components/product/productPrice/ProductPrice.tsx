import * as S from './productPrice.styled';

interface ProductPriceProps {
    price: string;
}

export const ProductPrice = ({
    price
}: ProductPriceProps) => {

    return (
        <S.ProductPriceContainer>
            {price}
        </S.ProductPriceContainer>
    )
};