import { Languages } from "../../types";
import { ButtonsContainer, Button } from "./styled";

interface Props {
  languages: Languages;
  language: string;
}

const Buttons = ({ languages, language }: Props) => (
  <ButtonsContainer>
    <Button>{languages[language].mainButtonLabel}</Button>
    <Button type="reset">{languages[language].resetButtonLabel}</Button>
  </ButtonsContainer>
);

export default Buttons;
