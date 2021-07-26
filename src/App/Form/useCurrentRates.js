import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrentRates = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
        base: "PLN",
        date: null,
        rates: null
    });

    useEffect(() => {
        const getRates = () => {
            const requestURL = 'https://api.exchangerate.host/latest';

            axios.get(requestURL + "?base=" + ratesData.base)
                .then((response) => {
                    setRatesData({
                        status: "success",
                        base: response.data.base,
                        date: response.data.date,
                        rates: response.data.rates
                    });
                })
                .catch(error => {
                    setRatesData({ status: "error" });
                    console.error(error.message);
                });
        };

        setTimeout(getRates, 2_000);
    }, []);

    return ratesData;
};