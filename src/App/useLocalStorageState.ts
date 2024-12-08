import { useState, useEffect } from "react";

export const useLocalStorageState = (keyName: string, initialValue: string): [string, (language: string) => void] => {
    const getInitialState = () => {
        const localStorageState = localStorage.getItem(keyName);
        if (localStorageState === null) {
            return initialValue;
        }

        return JSON.parse(localStorageState);
    };
    const [state, setState] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);

    return [state, setState];
};
