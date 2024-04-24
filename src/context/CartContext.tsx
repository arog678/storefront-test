import { createContext, ReactNode, useReducer, useContext } from 'react';
import { ProductType, SizeOptionID } from '../types/productTypes';
import * as React from 'react';

interface CartProviderProps {
    children: ReactNode;
    product: ProductType | null;
};

export type CartStateObject = {
    sizeSelected: SizeOptionID | null;
    sizes: {[key: SizeOptionID]: {
        count: number
    }};
    totalCount: number;
};

export type CartContextValue = {
    cartState: CartStateObject | null,
    dispatch: React.Dispatch<cartActions>,
    product: CartProviderProps['product'] | null,
} | null;

export const CartContext = createContext<CartContextValue>(null);

export const CartProvider = ({
    children,
    product,
}: CartProviderProps) => {

    const [cartState, dispatch] = useReducer(cartReducer, {
        sizes: {}, 
        totalCount: 0,
        sizeSelected: null,
    });

    return (
        <CartContext.Provider value={{cartState, dispatch, product}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
};

type cartActions = 
    {type: 'cartAdd'}
    | {type: 'cartGet'}
    | {type: 'sizeSelectSet', sizeID: SizeOptionID | null};

const cartReducer = (cartState: CartStateObject, action: cartActions) => {

    switch (action.type) {
        case 'cartAdd':
            
            const sID = cartState.sizeSelected;

            if (sID === null) {
                return cartState;
            }

            cartState.totalCount ++;
            if (cartState.sizes[sID]) cartState.sizes[sID].count ++;
            else cartState.sizes[sID] = { count: 1 };
            
            cartState.sizeSelected = null;


            return {
                ...cartState,
                sizeSelected: null,
            };

        case 'cartGet':
            return cartState;

        case 'sizeSelectSet':
            return {
                ...cartState,
                sizeSelected: action.sizeID
            };
            
        default:
            throw Error('Unknown action: ' + action); 
    }
};