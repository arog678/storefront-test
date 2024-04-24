import { ComponentProps, useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { CartItemImage } from "./cartItemImage/CartItemImage";
import { CartItemTitle } from "./cartItemTitle/CartItemTitle";
import { CartItemQuantityPrice } from "./cartItemQuantityPrice/CartItemQuanityPrice";
import { CartItemSize } from "./cartItemSize/CartItemSize";
import * as S from './cartItem.styled';
import { getSizeLabel } from "../../../../utils/getSizeLabel";

interface CartItemProps {
    cartQuantity:  ComponentProps<typeof CartItemQuantityPrice>['quantity'];
    sizeID: string;
};

export const CartItem = ({
    cartQuantity,
    sizeID,
}: CartItemProps) => {
    const cartCtx = useContext(CartContext);
    const product = cartCtx?.product;
    const sizeText = getSizeLabel(Number(sizeID), product); 

    // It is beyond the scope of this project 
    // but ideally a skeleton would be put here
    return product ? (
        <S.CartItemSection>
            <CartItemImage 
                productImage={{
                    src: product.imageURL,
                    alt: product.title,
                }}
            />

            <S.CartRightCol>

                <CartItemTitle 
                    title={product.title}
                />

                <CartItemQuantityPrice 
                    price={product.price}
                    quantity={cartQuantity}
                />

                {sizeText ? <CartItemSize
                    size={sizeText}
                /> : null}

            </S.CartRightCol>
                
        </S.CartItemSection>
    ) : null;
};