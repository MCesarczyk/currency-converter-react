import { useState, useEffect } from "react";

export const useCurrentDate = () => {
    const [date, setDate] = useState(new Date());

    const getDate = () => {
        setDate(new Date());
    };

    useEffect(() => {
        const clockInterval = setInterval(() => {
            getDate();
        }, 1000);

        return () => {
            clearInterval(clockInterval);
        };
    }, []);

    const customDate = date.toLocaleString(undefined, {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    return customDate;
};