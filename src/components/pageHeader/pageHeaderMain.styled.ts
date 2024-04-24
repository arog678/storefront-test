import styled from "styled-components";
import { CartDisplayContainer } from "./pageHeaderCart/cartDisplay/cartDisplay.style";
import { BORDER_LIGHT_GREY, FONT_COLOR_ONE, FONT_COLOR_TWO, HEADER_BACKGROUND } from "../../app.styled";

const LEFT_MARGIN = 50;
const RIGHT_MARGIN = 40;
const MARGIN_TOP = 15;
const HEADER_STRIP_HEIGHT = 35;
const BORDER_WIDTH = 3;
const OPENED_BORDER_STYLE = `${BORDER_WIDTH}px solid ${BORDER_LIGHT_GREY}`;

const CART_WIDTH = 60;
const CART_WIDTH_DESKTOP = 100;
const CART_ITEM_WIDTH = 350;
const TOP_ROW_WIDTH = CART_ITEM_WIDTH + LEFT_MARGIN + RIGHT_MARGIN;
const SPACER_MAX_WIDTH = CART_ITEM_WIDTH - LEFT_MARGIN;

export const CartDisplayStyled = styled(CartDisplayContainer)``;

export const PageHeader = styled.div`
    width: 100%;
    display: flex;
    align-itmes: flex-end;
    flex-direction: column;
    justify-content: end;
    background: ${HEADER_BACKGROUND};
    margin-top: ${MARGIN_TOP}px;

    ${CartDisplayContainer} {

        position: absolute;
        top: ${HEADER_STRIP_HEIGHT + BORDER_WIDTH + MARGIN_TOP}px;

        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        
        border: ${OPENED_BORDER_STYLE};
        border-top: 0px solid;
        width: calc(100%  - ${RIGHT_MARGIN}px);

        max-width: ${CART_ITEM_WIDTH}px;

    }
`;

export const CartIcon = styled.div<{
    $cartOpen: boolean;
}>`
    display: flex;
    height: ${HEADER_STRIP_HEIGHT}px;
    justify-content: center;
    align-items: center;
    bottom: -1px;
    position: relative;
cursor: pointer;

    background: ${p => p.$cartOpen ? 'white' : 'none'};
    color: ${p => !p.$cartOpen ? FONT_COLOR_TWO : FONT_COLOR_ONE};

    //DUE TO STYLE REQUIREMENTS THE FOLLOWING BORDER CODE MUST BE USED 
    //THIS IS TO PREVENT LAYOUT SHIFT AND MAINTAIN DESIGN'S CART BORDER
    border-top: ${p => p.$cartOpen 
        ? `${OPENED_BORDER_STYLE}` 
        : `${BORDER_WIDTH}px transparent solid` };

    border-right: ${p => p.$cartOpen 
        ? `${OPENED_BORDER_STYLE}` 
        : `${BORDER_WIDTH}px transparent solid` };

    ${p => !p.$cartOpen && `border-left: ${BORDER_WIDTH}px transparent solid;`}

    width: ${CART_WIDTH}px;
    @media (min-width: 768px) {
        width: ${CART_WIDTH_DESKTOP}px;
    }

`;

export const CartSpacer = styled.div<{
    $cartOpen: boolean;
}>`
    display: inline-block;

    width: calc(100% - ${CART_WIDTH}px - ${RIGHT_MARGIN}px);
    max-width: ${SPACER_MAX_WIDTH};

    @media (min-width: 768px) {
        width: calc(100% - ${CART_WIDTH_DESKTOP}px - ${LEFT_MARGIN}px - ${RIGHT_MARGIN}px);
    }

    ${p => p.$cartOpen && `
        border-bottom: ${OPENED_BORDER_STYLE};
        border-right: ${OPENED_BORDER_STYLE};
    `}
`;

export const TopRow = styled.div`
    display: flex;
    padding-left: ${LEFT_MARGIN}px;
    width: 100%;
    max-width: ${TOP_ROW_WIDTH}px;
    align-self: flex-end;
    justify-content: center;
`;