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
            const request = new XMLHttpRequest();
            const requestURL = 'https://api.exchangerate.host/latest';
            const base = `${ratesData.base}`;

            request.open('GET', requestURL + "?" + base, true);
            request.responseType = 'json';

            request.onload = () => {
                const { date, rates } = request.response;
                setRatesData({ status: "success", base, date, rates });
            };

            request.send(null);
        };

        setTimeout(getRates, 2_000);
    }, []);

    return ratesData;
};