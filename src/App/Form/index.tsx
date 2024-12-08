import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useCurrentRates } from "./useCurrentRates";
import Clock from "./Clock";
import Buttons from "./Buttons";
import requestedCurrencies from "./requestedCurrencies";

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
  FormAnnotation,
} from "./styled";
import { Languages } from "../types";

interface Props {
  languages: Languages;
  language: string;
  headerTitle: string;
  inputLabel: string;
  listTitle: string;
  resultTitle: string;
  resultLabel: string;
}

const Form = ({
  languages,
  language,
  headerTitle,
  inputLabel,
  listTitle,
  resultTitle,
  resultLabel,
}: Props) => {
  const requestedCurrenciesIds = requestedCurrencies.map(({ id }) => id);

  const ratesData = useCurrentRates(requestedCurrenciesIds);

  const [checkingDate, setCheckingDate] = useState("");
  const [chosenCurrency, setChosenCurrency] = useState("EUR");
  const [newAmount, setNewAmount] = useState("");
  const [result, setResult] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onCurrencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChosenCurrency(e.target.value);
  };

  const getExchangeRate = () => {
    return requestedCurrencies.find(({ id }) => id === chosenCurrency)?.rate;
  };

  const calculateResult = () => {
    const exchangeRate = getExchangeRate();

    if (exchangeRate === undefined) {
      return;
    }

    setResult([
      (parseFloat(newAmount) / exchangeRate).toFixed(2),
      " ",
      chosenCurrency,
    ]);
  };

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (ratesData.status !== "success") {
      return;
    }

    setCheckingDate(`${languages[language].dateLabel}${new Date(ratesData.date).toLocaleDateString("pl-PL")}`);
    getExchangeRate();
    calculateResult();
    setNewAmount("");
    inputRef.current?.focus();
  };

  const onFormReset = (event: FormEvent) => {
    event.preventDefault();

    setNewAmount("");
    setResult([]);
    setCheckingDate("");
    setChosenCurrency("EUR");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={onFormSubmit} onReset={onFormReset}>
      <Fieldset>
        <Legend>{headerTitle}</Legend>
        <Clock languages={languages} language={language} />
        <InputLabel>
          <InputLabelText>{inputLabel}</InputLabelText>
          <FormInput
            ref={inputRef}
            value={newAmount}
            placeholder={languages[language].inputPlaceholder}
            type="number"
            min="0.01"
            step="any"
            required
            autoFocus
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewAmount(e.target.value)}
          />
        </InputLabel>
      </Fieldset>
      <Fieldset>
        <Legend>{listTitle}</Legend>
        {ratesData.status === "loading" ? (
          <div>{languages[language].loadingMessage}</div>
        ) : ratesData.status === "error" ? (
          <div>{languages[language].errorMessage}</div>
        ) : (
          <List>
            {ratesData.rates &&
              Object.values(ratesData.rates).map(({ code, value }) => (
                <ListItem key={code}>
                  <input
                    type="radio"
                    name="chosenCurrency"
                    id={code}
                    value={code}
                    checked={chosenCurrency === code}
                    onChange={onCurrencyChange}
                  />
                  <ListLabel htmlFor={code}>
                    {
                      requestedCurrencies.find(({ id }) => id === code)?.label[
                        language as "EN" | "PL"
                      ]
                    }
                  </ListLabel>
                  {value.toFixed(4)}
                </ListItem>
              ))}
          </List>
        )}
      </Fieldset>
      <Fieldset>
        <Legend>{resultTitle}</Legend>
        <FormResult>
          {resultLabel}
          {result}
        </FormResult>
        <FormAnnotation>{checkingDate}</FormAnnotation>
        <Buttons languages={languages} language={language} />
      </Fieldset>
    </form>
  );
};

export default Form;
