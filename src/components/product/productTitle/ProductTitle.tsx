import * as S from './productTitle.styled';

interface ProductTitleProps {
    title: string;
};

export const ProductTitle = ({
    title
}: ProductTitleProps) => {

    return (
        <S.ProductTitleHeader>
            {title}
        </S.ProductTitleHeader>
    )
};