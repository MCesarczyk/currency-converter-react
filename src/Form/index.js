import { useState } from "react";
import "./style.css";

const Form = ({ title, depositTitle: inputTitle, listTitle, resultTitle, deposit, list, resultLabel, buttons }) => {
    
    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">{inputTitle}</legend>
                <label className="form__inputLabel">
                    <span className="form__inputLabelText">
                        {title}
                    </span>
                    <input
                        className="form__input"
                        placeholder="Kwota w PLN"
                        type="number"
                        min="0.01"
                        step="any"
                        required
                        autoFocus
                    />
                </label>
            </fieldset>
            <fieldset className="form__fieldset">
                <legend className="form__legend">{listTitle}</legend>
                {list}
            </fieldset>
            <fieldset className="form__fieldset">
                <legend className="form__legend">{resultTitle}</legend>
                <p className="form__result">{resultLabel} </p>
                {buttons}
            </fieldset>
        </form>
    )
};

export default Form;