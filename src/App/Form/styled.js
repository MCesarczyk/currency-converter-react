import styled from "styled-components";

export const Fieldset = styled.fieldset`
    border-radius: 20px;
    padding: 10px;
    margin: 10px;
`;

export const Legend = styled.legend`
    color: #fff;
    background-color: ${({theme}) => theme.color.primary};
    padding: 8px 24px;
    border-style: none;
    border-radius: 20px;
    text-align: center;
`;

export const InputLabel = styled.label`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;

    @media (max-width:480px) {
        flex-direction: column;
    }
`;

export const InputLabelText = styled.span`
    min-width: 100px;
`;

export const FormInput = styled.input`
    width: 40%;
    text-align: center;
    border-radius: 5px;
    height: 24px;

    @media (max-width: 480px) {
        width: 80%;
    }
`;

export const List = styled.ul`
    list-style: none;
    line-height: 1.75;
    padding-left: 0;
`;

export const ListItem = styled.li`
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 480px) {
            flex-direction: column;
            align-items: center;
    }
`;

export const ListLabel = styled.label`
    width: 150px;
    display: inline-block;
    margin: 0 5px;
`;

export const FormResult = styled.p`
    margin-left: 20px;
`;

export const FormAnnotation = styled.p`
    font-size: 12px;
    text-align: right;
`;