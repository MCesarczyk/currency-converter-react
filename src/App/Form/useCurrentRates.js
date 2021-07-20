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

            fetch(requestURL + "?base=" + ratesData.base)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP Error! Status: ${response.status}`);
                    }
                    return response;
                })
                .then(response => response.json())
                .then(
                    response => {
                        setRatesData({
                            status: "success",
                            base: response.base,
                            date: response.date,
                            rates: response.rates
                        });
                    }
                )
                .catch(error => {
                    setRatesData({ status: "error" });
                    console.error(error.message);
                })
        };

        setTimeout(getRates, 2_000);
    }, []);

    return ratesData;
};