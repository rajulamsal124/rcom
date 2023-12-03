'use client'
import styled from "styled-components";
interface ButtonProps {
    primary?: boolean;
}

const Button= styled.button<ButtonProps>`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid ${props => props.primary ? "blue" : "white"};
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background: ${props => props.primary ? "blue" : "white"};
        color: ${props => props.primary ? "white" : "blue"};
    }
`;
export default Button;