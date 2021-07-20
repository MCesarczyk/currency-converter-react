import { useRef, useState } from "react";
import { useCurrentRates } from "./useCurrentRates";
import Clock from "./Clock";
import Buttons from "./Buttons";
import currencies from "./currencies";

import {
  Fieldset,
  Legend,
  InputLabel,
  InputLabelText,
  FormInput,
  List,
  ListItem,
  ListLabel,
  FormResult,
  FormAnnotation
} from "./styled";
import languages from "../languages";

const Form = ({
  languages,
  language,
  inputTitle,
  inputLabel,
  listTitle,
  resultTitle,
  resultLabel
}) => {
  const ratesData = useCurrentRates();
  const status = ratesData.status;
  const date = ratesData.date;
  const rates = ratesData.rates;
  const [checkingDate, setCheckingDate] = useState("");
  const [chosenCurrency, setChosenCurrency] = useState("EUR");
  const [newAmount, setNewAmount] = useState("");
  const [result, setResult] = useState([]);
  const inputRef = useRef(null);

  const onCurrencyChange = ({ target }) => {
    setChosenCurrency(target.value);
  };

  const getExchangeRate = () => {
    return currencies.find(({ id }) => id === chosenCurrency).rate;
  };

  const calculateResult = () => {
    setResult([(newAmount / getExchangeRate()).toFixed(2), " ", chosenCurrency]);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    getExchangeRate();
    calculateResult();
    setNewAmount("");
    setCheckingDate(`${languages[language].dateLabel}${date}`);
    inputRef.current.focus();
  };

  const onFormReset = (event) => {
    event.preventDefault();

    setNewAmount("");
    setResult("");
    setCheckingDate("");
    setChosenCurrency("EUR");
    inputRef.current.focus();
  };

  let filteredRates = null;

  const filterRatesObject = () => {
    if (rates) {
      const wantedCurrencies = currencies.map(({ id }) => id);
      filteredRates = Object.fromEntries(Object.entries(rates).filter(
        ([id]) => wantedCurrencies.includes(id)));
    };
  };

  filterRatesObject();

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      <Fieldset>
        <Legend>{inputTitle}</Legend>
        <Clock />
        <InputLabel>
          <InputLabelText>
            {inputLabel}
          </InputLabelText>
          <FormInput
            ref={inputRef}
            value={newAmount}
            placeholder={languages[language].inputPlaceholder}
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
        {status === "error" ? (
          <div>
            Unable to fetch data...
            please check your internet connection.
          </div>
        ) : (status === "loading" ? (
          <div>
            Loading... please wait
          </div>
        ) : (
          <List>
            {Object.keys(filteredRates).map((key, value) => (
              <ListItem key={key} >
                <input
                  type="radio"
                  name="chosenCurrency"
                  id={key}
                  value={key}
                  checked={chosenCurrency === key}
                  onChange={onCurrencyChange}
                />
                <ListLabel htmlFor={key}>
                  {currencies[currencies.findIndex(({ id }) => id === key)].label}
                </ListLabel>
                {(1 / (Object.values(filteredRates)[value])).toFixed(4)}
              </ListItem>
            ))
            }
          </List>
        ))}
      </Fieldset>
      <Fieldset>
        <Legend>{resultTitle}</Legend>
        <FormResult>
          {resultLabel}
          {result}
        </FormResult>
        <FormAnnotation>
          {checkingDate}
        </FormAnnotation>
        <Buttons />
      </Fieldset>
    </form>
  )
}

export default Form;