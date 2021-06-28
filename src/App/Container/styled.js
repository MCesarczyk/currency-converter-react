import styled from "styled-components";
import background from "../../images/background.png";

export const ContainerBody = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    background-color: #ddd;
    background-attachment: fixed;
`;

export const ContainerElement = styled.div`
    max-width: ${({ theme }) => theme.breakpoint.mobileMax};
    min-width: 240px;
    margin: 0 auto;
    background-color: #eee;
`;