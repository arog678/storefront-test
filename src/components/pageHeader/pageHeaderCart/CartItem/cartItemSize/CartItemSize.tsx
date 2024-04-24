import * as S from './cartItemSize.styled';

interface CartItemSizeProps {
    size: string, 
}

export const CartItemSize = ({
    size
}: CartItemSizeProps) => {

    return (
        <S.ItemSizeSpan>
            Size: <S.SizeLabel>{size}</S.SizeLabel>
        </S.ItemSizeSpan>
    )
};