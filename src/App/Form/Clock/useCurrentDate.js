import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [customDateWithTime, setCustomDateWithTime] = useState("");

    const getCustomDate = () => {
        const myDate = new Date();
        const customDate = myDate.toLocaleString(
            undefined,
            { weekday: "long", day: "numeric", month: "long", time: "numeric" },
        );
        const time = myDate.toLocaleTimeString();

        setCustomDateWithTime(`Dzisiaj jest ${customDate}, ${time}`);
    };

    useEffect(() => {
        getCustomDate();
        const clockInterval = setInterval(() => {
            getCustomDate();
        }, 1000);

        return () => {
            clearInterval(clockInterval);
        };
    }, []);

    return customDateWithTime;
};