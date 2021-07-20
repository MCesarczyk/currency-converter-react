import { LanguageButtons } from "./styled";

const Switcher = ({ languages, changeLanguage, language }) => {
    return (
        <LanguageButtons>
            {Object.keys(languages).map((key, value) => (
                <button
                    key={key}
                >
                    {key}
                </button>
            ))}
        </LanguageButtons>
    )
};

export default Switcher;