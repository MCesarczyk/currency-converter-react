import { useEffect, useState } from "react";

export const useCurrentRates = () => {
    const [ratesData, setRatesData] = useState({
        success: false,
        error: false,
        date: null,
        rates: null
    });

    useEffect(() => {
        const getRates = () => {
            try {
                const request = new XMLHttpRequest();
                const requestURL = 'https://api.exchangerate.host/latest';
                const base = "base=PLN";

                request.open('GET', requestURL + "?" + base, true);
                request.responseType = 'json';

                request.onload = () => {
                    setRatesData(request.response);
                };

                request.send(null);

            } catch (error) {
                setRatesData({ error: true });
            }
        };

        setTimeout(getRates, 2_000);
    }, []);

    return ratesData;
};