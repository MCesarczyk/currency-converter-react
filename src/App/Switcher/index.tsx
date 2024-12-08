import { MouseEvent } from "react";
import { LanguageButtons } from "./styled";
import { Languages } from "../types";

interface ButtonEventTarget extends EventTarget {
  value: string;
}

interface Props {
  languages: Languages;
  setLanguage: (language: string) => void;
}

const Switcher = ({ languages, setLanguage }: Props) => {
  const onLanguageChange = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement & ButtonEventTarget;

    setLanguage(target.value);
  };

  return (
    <LanguageButtons>
      {Object.keys(languages).map((key) => (
        <button key={key} value={key} onClick={onLanguageChange}>
          {key}
        </button>
      ))}
    </LanguageButtons>
  );
};

export default Switcher;
