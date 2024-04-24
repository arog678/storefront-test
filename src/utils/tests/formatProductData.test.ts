import { expect, describe, it } from 'vitest'
import { formatProductData } from '../formatProductData';

const TEST_PRODUCT_RAW = {
    "id": 1,
    "title": "Classic Tee",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": 75,
    "imageURL": "https://mrdevelopertestassets.s3.ap-southeast-2.amazonaws.com/classic-tee.jpg",
    "sizeOptions": [
      {
        "id": 1,
        "label": "S"
      },
      {
        "id": 2,
        "label": "M"
      },
      {
        "id": 3,
        "label": "L"
      }
    ]
};

describe('formatProductData', () => {

    it('Should format product data', () => {
        const product = TEST_PRODUCT_RAW;
        
        const productFormatted = formatProductData(product);
        expect(productFormatted).toHaveProperty('price', '$75.00');
        expect(productFormatted).toHaveProperty('title', product.title);
    });
    
});
