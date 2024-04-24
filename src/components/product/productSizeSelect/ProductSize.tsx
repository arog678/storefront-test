import { useCartContext } from "../../../context/CartContext";
import { SizeOptionType } from "../../../types/productTypes"
import { getSizeLabel } from "../../../utils/getSizeLabel";
import * as S from './productSize.styled';

interface ProductSizeProps {
    sizeOptions: SizeOptionType[];
};

export const ProductSize = ({
    sizeOptions,
}: ProductSizeProps) => {
    const cartCtx = useCartContext();
    const sizeSelected = cartCtx?.cartState?.sizeSelected;
    const sizeSelectedLabel = getSizeLabel(sizeSelected, cartCtx?.product);

    return (
        <S.ProductSizeContainer>
            <S.ContainerTop>
                <S.SizeLabel>SIZE</S.SizeLabel>
                <S.SelectedLabel>{sizeSelectedLabel}</S.SelectedLabel>
            </S.ContainerTop>
            {sizeOptions.map((sizeItem) => (
                <S.SizeButton
                    key={sizeItem.id}
                    $selectedItem={sizeItem.id === sizeSelected}
                    onClick={() => {
                        cartCtx?.dispatch({
                            type: 'sizeSelectSet',
                            sizeID: sizeItem.id
                        });
                    }}
                >
                    {sizeItem.label}
                </S.SizeButton>
            ))}
        </S.ProductSizeContainer>
    );
};