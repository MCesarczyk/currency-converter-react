import React from "react";

const Fieldset = ({ legend, body }) => {
    <fieldset className="form__fieldset">
        <legend className="form__legend">{legend}</legend>
        {body}
    </fieldset>
};

export default Fieldset;