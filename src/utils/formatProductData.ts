import { ProductTypeRaw } from "../types/productTypes";

export const NO_PRICE_STRING = 'NO PRICE';

/**
 * This will format the input of the product coming in from the url
 * 
 * @param productRaw - product data thhat comes in from the endpoint
 * @returns - processed data for use in components
 */
export const formatProductData = (productRaw: ProductTypeRaw) => {
    return {
        ...productRaw,
        //For the price, a formatter util func would be used 
        //to convert to regional currency (e.g. getFormattedPrice(price))
        //However that is beyond the scope of this project
        price: `$${productRaw.price}.00`,

    };
};