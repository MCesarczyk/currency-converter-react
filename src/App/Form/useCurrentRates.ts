import { useEffect, useState } from "react";

type RatesData =
  | {
    status: "loading";
    base: string;
    date: null;
    rates: null;
  } | {
    status: "success";
    base: string;
    date: string;
    rates: Record<string, number>;
  } | {
    status: "error";
  }

export const useCurrentRates = () => {
  const [ratesData, setRatesData] = useState<RatesData>({
    status: "loading",
    base: "PLN",
    date: null,
    rates: null
  });

  const requestURL = 'https://api.exchangerate.host/latest';

  useEffect(() => {
    if (ratesData.status === "error") {
      return;
    }

    const getRates = async () => {
      try {
        const response = await fetch(requestURL + "?base=" + ratesData.base);

        if (!response.ok) {
          throw new Error("No response");
        }

        const { base, date, rates } = await response.json();

        if (!rates) {
          throw new Error("No rates data");
        }

        if (base !== ratesData.base) {
          throw new Error(`Wrong currency base: ${base}`);
        }

        setRatesData({
          status: "success",
          base: base,
          date: date,
          rates: rates
        });

      } catch (error) {
        if (error instanceof Error) {
          setRatesData({ status: "error" });
          console.log(error.message);
        }
      }
    };

    setTimeout(getRates, 2_000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ratesData;
};
