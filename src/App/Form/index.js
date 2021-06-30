import { useEffect, useRef, useState } from "react";
import Clock from "./Clock";
import Buttons from "./Buttons";
import currencies from "./currencies";
import { Fieldset, Legend, InputLabel, InputLabelText, FormInput, List, ListItem, ListLabel, FormResult, FormAnnotation } from "./styled";

const Form = ({ title, inputTitle, listTitle, resultTitle, resultLabel }) => {
    const [currentCurrencies, setCurrentCurrencies] = useState(currencies);
    const [checkingDate, setCheckingDate] = useState("24/06/2021");

    // useEffect(() => {
    //     setCurrentCurrencies(currencies);
    // }, []);

    const [chosenCurrency, setChosenCurrency] = useState("EUR");

    const [newAmount, setNewAmount] = useState("");

    const [result, setResult] = useState([]);

    const inputRef = useRef(null);

    const onCurrencyChange = ({ target }) => {
        setChosenCurrency(target.value);
    };

    const getExchangeRate = () => {
        return (currentCurrencies.find(({ id }) => id === chosenCurrency).rate);
    };

    const calculateResult = () => {
        setResult([(newAmount / getExchangeRate()).toFixed(2), chosenCurrency]);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        getExchangeRate();
        calculateResult();
        setNewAmount("");
        inputRef.current.focus();
    };

    const onFormReset = (event) => {
        event.preventDefault();

        setNewAmount("");
        setResult("");
        setChosenCurrency("EUR");
        inputRef.current.focus();
    };

    return (
        <form onSubmit={onFormSubmit} onReset={onFormReset}>
            <Fieldset>
                <Legend>{inputTitle}</Legend>
                <Clock />
                <InputLabel>
                    <InputLabelText>
                        {title}
                    </InputLabelText>
                    <FormInput
                        ref={inputRef}
                        value={newAmount}
                        placeholder="Kwota w PLN"
                        type="number"
                        min="0.01"
                        step="any"
                        required
                        autoFocus
                        onChange={({ target }) => setNewAmount(target.value)}
                    />
                </InputLabel>
            </Fieldset>
            <Fieldset>
                <Legend>{listTitle}</Legend>
                {
                    <List>
                        {currentCurrencies.map(currency => (
                            <ListItem key={currency.id} >
                                <div>
                                    <input
                                        type="radio"
                                        name="chosenCurrency"
                                        id={currency.id}
                                        value={currency.id}
                                        checked={chosenCurrency === currency.id}
                                        onChange={onCurrencyChange}
                                    />
                                    <ListLabel htmlFor={currency.id}>
                                        {currency.label}
                                    </ListLabel>
                                </div>
                                <FormInput
                                    value={currency.rate.toFixed(4)}
                                    type="number"
                                    min="0.0001"
                                    step="0.0001"
                                    required
                                    readOnly
                                />
                            </ListItem>
                        ))
                        }
                    </List>
                }
            </Fieldset>
            <Fieldset>
                <Legend>{resultTitle}</Legend>
                <FormResult>
                    {resultLabel}
                    {result}
                </FormResult>
                <FormAnnotation>
                    *wg kursu z dnia {checkingDate}
                </FormAnnotation>
                <Buttons />
            </Fieldset>
        </form>
    )
};

export default Form;