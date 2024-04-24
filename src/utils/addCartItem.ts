import { CartContextValue } from "../context/CartContext";
import { toast } from 'react-toastify';

/**
 * This function will attempt to add the currently selected size to the cart
 * If there is no selected size a toast message will pop up
 * 
 * @param cartCtx - The context for the func to look up cart state
 */
export const addCartItem = (
    cartCtx: CartContextValue
) => {
    if (cartCtx?.cartState?.sizeSelected === null) {
        toast("No size selected", {
            type: 'error'
        });  
    } else {
        cartCtx?.dispatch({type: 'cartAdd'});
    }
};
