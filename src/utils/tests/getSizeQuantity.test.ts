import { expect, describe, it } from 'vitest'
import { getSizeQuantity } from '../getSizeQuantity';

const TEST_CART_SIZES = {
    1: { count: 1 }, 
    2: { count: 2 },
    3: { count: 3 }
};

describe('getSizeQuantity', () => {

    it('Should get cart for id', () => {
        const cartSizes = TEST_CART_SIZES;
        const sizeID = 1;
        
        expect(getSizeQuantity(cartSizes, sizeID)).toBe(1);
    });
    
    it('Should get cart for id that is String', () => {
        const cartSizes = TEST_CART_SIZES;
        const sizeID = '2';
        
        expect(getSizeQuantity(cartSizes, sizeID)).toBe(2);
    });
    
    it('Should return 0 when id not in object', () => {
        const cartSizes = TEST_CART_SIZES;
        const sizeID = 0;
        
        expect(getSizeQuantity(cartSizes, sizeID)).toBe(0);
    });
})