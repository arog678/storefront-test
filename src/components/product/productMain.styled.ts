import { styled } from "styled-components";
import { ProductImageItem } from "./productImage/productImage.styled";

export const ProductContainer = styled.div`
    margin: 30px 20px;
    text-align: start;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto; 

    @media (min-width: 768px) {
        grid-template-columns: 50% 50%;
        max-width: min(1100px, 90vw);
        margin: 30px auto;
    }
`;

export const ProductInfo = styled.div`
    grid-gap: 20px;
    display: flex;
    flex-direction: column;
`;