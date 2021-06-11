import { useState } from "react";
import "./style.css";

const Form = ({ title, inputTitle, listTitle, list, resultTitle, resultLabel, buttons }) => {
    const currencyTable = [
        {
            id: "EUR",
            value: 4.5481,
            label: "Euro",
            checked: true,
        },
        {
            id: "USD",
            value: 3.7978,
            label: "Dolar amerykański"
        },
        {
            id: "AUD",
            value: 2.8517,
            label: "Dolar australijski"
        },
        {
            id: "BGN",
            value: 2.3254,
            label: "Lew bułgarski"
        },
        {
            id: "HRK",
            value: 0.6011,
            label: "Kuna chorwacka"
        }
    ];

    const [chosenCurrency, setChosenCurrency] = useState("EUR");

    const [newAmount, setNewAmount] = useState("");

    const [calculatedAmount, setCalculatedAmount] = useState([]);

    const onCurrencyChange = ({ target }) => {
        setChosenCurrency(target.value);
    };

    const calculateAmount = () => {
        setNewAmount(newAmount);
        setCalculatedAmount([newAmount, chosenCurrency]);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        calculateAmount();
        setNewAmount("");
    };

    const onFormReset = () => {
        setNewAmount("");
        setCalculatedAmount("");
        setChosenCurrency("EUR");
    };

    return (
        <form className="form" onSubmit={onFormSubmit} onReset={onFormReset}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">{inputTitle}</legend>
                <label className="form__inputLabel">
                    <span className="form__inputLabelText">
                        {title}
                    </span>
                    <input
                        value={newAmount}
                        className="form__input"
                        placeholder="Kwota w PLN"
                        type="number"
                        min="0.01"
                        step="any"
                        required
                        autoFocus
                        onChange={({ target }) => setNewAmount(target.value)}
                    />
                </label>
            </fieldset>
            <fieldset className="form__fieldset">
                <legend className="form__legend">{listTitle}</legend>
                {
                    <ul className="form__list">
                        {currencyTable.map(currency => (
                            <li className="form__listItem" key={currency.id} >
                                <div className="form__listInputContainer">
                                    <input
                                        type="radio"
                                        name="chosenCurrency"
                                        id={currency.id}
                                        value={currency.id}
                                        defaultChecked={currency.checked}
                                        onChange={onCurrencyChange}
                                    />
                                    <label
                                        className="form__listLabel"
                                        htmlFor={currency.id}>
                                        {currency.label}
                                    </label>
                                </div>
                                <input
                                    className="form__listInput"
                                    value={currency.value}
                                    type="number"
                                    min="0.0001"
                                    step="0.0001"
                                    required
                                />
                            </li>
                        ))
                        };
                 </ul>
                }
            </fieldset>
            <fieldset className="form__fieldset">
                <legend className="form__legend">{resultTitle}</legend>
                <p className="form__result">
                    {resultLabel}
                    {calculatedAmount}
                </p>
                {buttons}
            </fieldset>
        </form>
    )
};

export default Form;