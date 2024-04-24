import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import * as S from './pageHeaderMain.styled';
import { FaShoppingCart } from 'react-icons/fa';
import { CartDisplay } from './pageHeaderCart/cartDisplay/CartDisplay';
import useDeviceDetect from '../../hooks/useMobileDeviceCheck';

export const PageHeaderMain = () => {

    const cartCtx = useContext(CartContext);
    const [cartOpen, setCartOpen] = useState(false);

    const cartCount = cartCtx?.cartState?.totalCount

    const { isMobile } = useDeviceDetect();

    return (
        <S.PageHeader>
            <S.TopRow>
                <S.CartSpacer $cartOpen={cartOpen}/>
                <S.CartIcon $cartOpen={cartOpen} onClick={
                        () => cartCount && setCartOpen(open => !open)
                    }>

                    {isMobile ? <FaShoppingCart /> : 'My Cart'}
                    {` ( ${cartCount} )`}
                </S.CartIcon>
                {cartOpen ? <CartDisplay />: null}
            </S.TopRow>
        </S.PageHeader>
    );
};

