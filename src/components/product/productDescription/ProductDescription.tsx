import * as S from './productDescription.Styled'

interface ProductDescriptionProps {
    description: string;
}

export const ProductDescription  = ({
    description
}: ProductDescriptionProps) => {

    return (
        <S.ProductDescriptionContainer>
            {description}
        </S.ProductDescriptionContainer>
    )
};