import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 480px) {
            flex-direction: column;
            align-items: center;
    }
`;

export const Button = styled.button`
    min-width: 165px;
    color: #ebe6dc;
    background-color: #133246;
    display: inline-block;
    border-radius: 20px;
    padding: 5px 10px;
    margin: 10px;
    width: 45%;

    &:hover {
        background-color: hsl(210, 40%, 30%);
    }

    &:active {
        background-color: hsl(210, 40%, 40%);
    }
`;