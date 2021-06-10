import { useState } from "react";
import "./style.css";

const List = () => {
    const [currencyTable, setCurrencyTable] = useState([
        {
            key: "EUR",
            value: 4.5481,
            label: "Euro",
        },
        {
            key: "USD",
            value: 3.7978,
            label: "Dolar amerykański",
        },
        {
            key: "AUD",
            value: 2.8517,
            label: "Dolar australijski",
        },
        {
            key: "BGN",
            value: 2.3254,
            label: "Lew bułgarski",
        },
        {
            key: "HRK",
            value: 0.6011,
            label: "Kuna chorwacka",
        }
    ]);

    return (
        <ul className="list">
            {currencyTable.map(currency => (
                <li className="list__item">
                    <div className="list__inputContainer">
                        <input
                            type="radio"
                            name="currencyList"
                            id={currency.key}
                            value={currency.key}
                            checked
                        />
                        <label
                            className="list__label"
                            for={currency.key}>
                            {currency.label}
                        </label>
                    </div>
                    <input
                        className="list__input"
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
    )
};

export default List;