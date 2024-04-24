import styled from "styled-components";
import { BORDER_DARK_GREY, BORDER_LIGHT_GREY, FONT_COLOR_ONE, FONT_COLOR_TWO } from "../../../app.styled";

const REQUIRED_COLOR = '#C90000';

export const ProductSizeContainer = styled.div`
    font-size: 12px;
`;

export const SizeLabel = styled.label`
    font-weight: 600;
    color: ${FONT_COLOR_TWO};
    &::after {
        content: "*";
        color: ${REQUIRED_COLOR}; 
    }
`;

export const SelectedLabel = styled.span`
    display: inline;
    margin-left: 5px;
`;

export const SizeButton = styled.button<{
    $selectedItem: boolean;
}>`
    margin: 10px 10px 5px 0px;

    border: ${p => p.$selectedItem ? `2px solid ${BORDER_DARK_GREY}` : `1px solid ${BORDER_LIGHT_GREY}`};
    height: 3em;
    width: 3em;
    background: transparent;
    color: ${p => p.$selectedItem ? FONT_COLOR_ONE : FONT_COLOR_TWO};
    cursor: pointer;
`;

export const ContainerTop = styled.div``;