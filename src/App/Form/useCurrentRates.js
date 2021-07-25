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

            const dataFetch = async () => {
                let response = await fetch(requestURL + "?base=" + ratesData.base);

                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }

                response = await response.json();
                
                setRatesData({
                    status: "success",
                    base: response.base,
                    date: response.date,
                    rates: response.rates
                });
            };

            dataFetch()
                .catch(error => {
                    setRatesData({ status: "error" });
                    console.error(error.message);
                });
        };

        setTimeout(getRates, 2_000);
    }, []);

    return ratesData;
};