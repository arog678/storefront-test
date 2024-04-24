import { expect, describe, it, vi } from 'vitest'
import { addCartItem } from '../addCartItem';
import { toast } from 'react-toastify';

vi.mock('react-toastify', () => {
    return {
      toast: vi.fn(),
    };
});  

const testContext = {
    dispatch: vi.fn(),
    product: null,
    cartState: {
        sizes: {}, 
        totalCount: 0,
        sizeSelected: null as number | null,
    },
};

describe('addCartItem', () => {
    
    it('should run mock dispatch', () => {    
        testContext.cartState.sizeSelected = 1;

        addCartItem(testContext);

        expect(testContext.dispatch).toBeCalled()
    });

    it('should run error mock', () => {    
        testContext.cartState.sizeSelected = null;

        addCartItem(testContext);

        expect(toast).toBeCalled()
    });
    
});