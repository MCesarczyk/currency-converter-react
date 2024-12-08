import { useEffect, useState } from "react";
import { ApiCurrencyDictionary } from "../types";

type RatesData =
  | {
    status: "loading";
    date: null;
    rates: null;
  } | {
    status: "success";
    date: string;
    rates: ApiCurrencyDictionary;
  } | {
    status: "error";
  }

export const useCurrentRates = (currencies: string[]) => {
  const [ratesData, setRatesData] = useState<RatesData>({
    status: "loading",
    date: null,
    rates: null
  });

  const requestedCurrenciesQuery = encodeURIComponent(currencies.join(","));

  const requestURL = `https://api.currencyapi.com/v3/latest?apikey=${process.env.REACT_APP_API_KEY}&currencies=${requestedCurrenciesQuery}`;

  const base = "PLN";

  useEffect(() => {
    if (ratesData.status === "error") {
      return;
    }

    const getRates = async () => {
      try {
        const response = await fetch(requestURL + "&base_currency=" + base);

        if (!response.ok) {
          throw new Error("No response");
        }

        const { data, meta } = await response.json();

        if (!data) {
          throw new Error("No rates data");
        }

        setRatesData({
          status: "success",
          date: meta.last_updated_at,
          rates: data
        });

      } catch (error) {
        if (error instanceof Error) {
          setRatesData({ status: "error" });
          console.log(error.message);
        }
      }
    };

    setTimeout(getRates, 2_000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return ratesData;
};
