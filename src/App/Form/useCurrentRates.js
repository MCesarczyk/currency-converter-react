import { useEffect, useState } from "react";

export const useCurrentRates = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
        date: null,
        rates: null
    });

    useEffect(() => {
        const getRates = () => {
            const request = new XMLHttpRequest();
            const requestURL = 'https://api.exchangerate.host/latest';
            const base = "base=PLN";

            request.open('GET', requestURL + "?" + base);
            request.responseType = 'json';

            request.onload = () => {
                setRatesData(request.response);
            };

            request.send();
        };

        setTimeout(getRates(), 2_000);
    }, []);

    return ratesData;
};