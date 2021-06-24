import { ButtonsContainer, Button } from "./styled";

const Buttons = () => (
    <ButtonsContainer>
        <Button>
            Przelicz
        </Button>
        <Button type="reset">
            Wyczyść formularz
        </Button>
    </ButtonsContainer>
);

export default Buttons;