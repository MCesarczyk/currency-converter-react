import { useEffect, useState } from "react";

export const useCurrentRates = () => {
    const [ratesData, setRatesData] = useState({
        status: "loading",
        base: "PLN",
        date: null,
        rates: null
    });

    const requestURL = 'https://api.exchangerate.host/latest';

    useEffect(() => {
        const getRates = async () => {
            try {
                const response = await fetch(requestURL + "?base=" + ratesData.base);

                if (!response.ok) {
                    throw new Error(`HTTP Error! Status: ${response.status}`);
                }

                const { base, date, rates } = await response.json();

                setRatesData({
                    status: "success",
                    base: base,
                    date: date,
                    rates: rates
                });

            } catch (error) {
                setRatesData({ status: "error" });
            }
        };

        setTimeout(getRates, 2_000);
    }, []);

    return ratesData;
};