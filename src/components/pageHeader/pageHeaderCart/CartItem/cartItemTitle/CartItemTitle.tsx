import * as S from './cartItemTitle.styled';

interface CartItemTitleProps {
    title: string;
}

export const CartItemTitle = ({title}: CartItemTitleProps) => {

    return (
        <S.ItemTitle>
            {title}
        </S.ItemTitle>
    );
};