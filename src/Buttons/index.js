import "./style.css";

const Buttons = () => (
    <div className="buttons">
    <button className="buttons__button form__buttonCalculate">
        Przelicz
    </button>
    <button className="buttons__button form__buttonReset" type="reset">
        Wyczyść formularz
    </button>
</div>
);

export default Buttons;