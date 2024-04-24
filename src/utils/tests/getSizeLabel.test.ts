import { expect, describe, it } from 'vitest'
import { getSizeLabel } from '../getSizeLabel';

export const PRODUCT_TEST = {
    "id": 1,
    "title": "Classic Tee",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "price": '$75.00',
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

describe('getSizeLabel', () => {
    it('Should get size label', () => {
        const selectedID = 1;
        const product = PRODUCT_TEST;
        
        expect(getSizeLabel(selectedID, product)).toBe("S");
    });
    
    it('Should get undefined label', () => {
        const selectedID = null;
        const product = PRODUCT_TEST;
        
        expect(getSizeLabel(selectedID, product)).toBe(undefined);
    });
})
