import { styled } from "styled-components";

export const CartItemSection = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    background: white;
    padding: 20px;
    border: white 1px solid;
    text-align: start;
    column-gap: 10px;

    
    img {
        width: 35%;
    }
`;

export const CartRightCol = styled.div`
    display: flex;
    flex-direction: column;
`;