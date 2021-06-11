import { useState } from "react";
import "./style.css";

const Form = ({ title, inputTitle, listTitle, list, resultTitle, resultLabel, buttons }) => {
    const currencyTable = [
        {
            id: "EUR",
            rate: 4.5481,
            label: "Euro",
            checked: true,
        },
        {
            id: "USD",
            rate: 3.7978,
            label: "Dolar amerykański"
        },
        {
            id: "AUD",
            rate: 2.8517,
            label: "Dolar australijski"
        },
        {
            id: "BGN",
            rate: 2.3254,
            label: "Lew bułgarski"
        },
        {
            id: "HRK",
            rate: 0.6011,
            label: "Kuna chorwacka"
        }
    ];

    const [chosenCurrency, setChosenCurrency] = useState("EUR");

    const [newAmount, setNewAmount] = useState("");

    const [exchangeRate, setExchangeRate] = useState(4.5481);

    const [result, setResult] = useState([]);

    const onCurrencyChange = ({ target }) => {
        setChosenCurrency(target.value);
    };

    const calculateResult = () => {
        setNewAmount(newAmount);
        setResult([(newAmount/exchangeRate).toFixed(2), chosenCurrency]);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        calculateResult();
        setNewAmount("");
    };

    const onFormReset = () => {
        setNewAmount("");
        setResult("");
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
                                    value={currency.rate}
                                    type="number"
                                    min="0.0001"
                                    step="0.0001"
                                    required
                                    readOnly
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
                    {result}
                </p>
                {buttons}
            </fieldset>
        </form>
    )
};

export default Form;