import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ languages, language }) => (
    <ButtonsContainer>
        <Button>
            {languages[language].mainButtonLabel}
        </Button>
        <Button type="reset">
            {languages[language].resetButtonLabel}
        </Button>
    </ButtonsContainer>
);

export default Buttons;