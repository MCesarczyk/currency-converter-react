import "./style.css";

const List = () => (
    <ul className="list">
        <li className="list__item">
            <div className="list__inputContainer">
                <input type="radio" name="currencyChecked" id="eur" value="EUR" checked />
                <label className="list__label" for="eur">
                    EUR Euro
                                </label>
            </div>
            <input className="list__input" value={4.5481} type="number" min="0.0001" step="0.0001"
                required />
        </li>
        <li className="list__item">
            <div className="list__inputContainer">
                <input type="radio" name="currencyChecked" id="usd" value="USD" />
                <label className="list__label" for="usd">
                    USD Dolar amerykański
                                </label>
            </div>
            <input className="list__input" value={3.7978} type="number" min="0.0001" step="0.0001"
                required />
        </li>
        <li className="list__item">
            <div className="list__inputContainer">
                <input type="radio" name="currencyChecked" id="aud" value="AUD" />
                <label className="list__label" for="aud">
                    AUD Dolar australijski
                                </label>
            </div>
            <input className="list__input" value={2.8517} type="number" min="0.0001" step="0.0001"
                required />
        </li>
        <li className="list__item">
            <div className="list__inputContainer">
                <input type="radio" name="currencyChecked" id="bgn" value="BGN" />
                <label className="list__label" for="bgn">
                    BGN Lew bułgarski
                                </label>
            </div>
            <input className="list__input" value={2.3254} type="number" min="0.0001" step="0.0001"
                required />
        </li>
        <li className="list__item">
            <div className="list__inputContainer">
                <input type="radio" name="currencyChecked" id="hrk" value="HRK" />
                <label className="list__label" for="hrk">
                    HRK Kuna chorwacka
                                </label>
            </div>
            <input className="list__input" value={0.6011} type="number" min="0.0001" step="0.0001"
                required />
        </li>
    </ul>
);

export default List;