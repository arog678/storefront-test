import { CartStateObject } from "../context/CartContext";

/**
 * Gets the quantity of products of a given size currently in the cart
 * 
 * @param cartSizes - Cart size object found in the productType object
 * @param sizeID - SizeID that you want to look for
 * @returns - A count of current sizes in the cartSizes object
 */
export const getSizeQuantity = (
    cartSizes: CartStateObject['sizes'],
    sizeID: number | string,
) => {
    const sizeIDFormatted = typeof sizeID === 'string' 
        ? Number(sizeID) : sizeID;
        
    const cartSizeSelected = cartSizes[sizeIDFormatted];

    return cartSizeSelected ? cartSizeSelected.count : 0;
};