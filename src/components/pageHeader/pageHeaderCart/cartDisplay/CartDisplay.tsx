import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";
import * as S from './cartDisplay.style';
import { getSizeQuantity } from "../../../../utils/getSizeQuantity";

export const CartDisplay = () => {
    const cartCtx = useContext(CartContext);
    const cartSizes = cartCtx?.cartState?.sizes;

    return cartSizes ? (
        <S.CartDisplayContainer>
            {Object.keys(cartSizes).map(sizeID => {
                const cartQuantity = getSizeQuantity(cartSizes, sizeID);
                return (
                    <CartItem 
                        key={sizeID}
                        sizeID={sizeID}
                        cartQuantity={cartQuantity}
                    />
                );
            })}
        </S.CartDisplayContainer>
    ) : null;
};