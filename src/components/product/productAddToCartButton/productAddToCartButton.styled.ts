import styled from "styled-components";
import { BORDER_DARK_GREY } from "../../../app.styled";

export const AddToCartButton = styled.button`
    margin: 5px 0px;
    border: 2px solid ${BORDER_DARK_GREY};
    padding: 8px 20px;
    background: transparent;
    text-transform: uppercase; 
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    width: fit-content;

    transition: 0.2s;
    &:hover {
        color: white;
        background: black;
    }
`;