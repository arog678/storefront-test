import { ProductType, SizeOptionID } from "../types/productTypes";

/**
 * This returns the size label on a given product
 * 
 * @param selectedID - ID of the size you want to select
 * @param product - Product you want to look up for sizing
 * @returns - a label of the size you want to look up
 */
export const getSizeLabel = (
    selectedID?: SizeOptionID | null,
    product?: ProductType | null, 
) => {

    return product && product['sizeOptions'].find(
        sizeOption => sizeOption.id === selectedID)?.label;
};