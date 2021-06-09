import { useState } from "react";
import "./style.css";

const Form = ({ title, depositTitle: inputTitle, listTitle, resultTitle, list, resultLabel, buttons }) => {
    const [newAmount, setNewAmount] = useState("");
    let [calculatedAmount, setCalculatedAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(newAmount);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
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
                {list}
            </fieldset>
            <fieldset className="form__fieldset">
                <legend className="form__legend">{resultTitle}</legend>
                <p className="form__result">{resultLabel} {calculatedAmount} </p>
                {buttons}
            </fieldset>
        </form>
    )
};

export default Form;