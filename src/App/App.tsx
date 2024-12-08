import Container from "./Container";
import Form from "./Form";
import Switcher from "./Switcher";
import languages from "./languages";
import { useLocalStorageState } from "./useLocalStorageState";

function App() {
  const [language, setLanguage] = useLocalStorageState("language", "EN");

  const languageKey = language as keyof typeof languages;

  document.title = languages[languageKey].headerTitle;

  return (
    <Container>
      <Switcher
        languages={languages}
        setLanguage={setLanguage}
      />
      <Form
        languages={languages}
        language={language}
        headerTitle={languages[languageKey].headerTitle}
        inputLabel={languages[languageKey].inputLabel}
        listTitle={languages[languageKey].listTitle}
        resultTitle={languages[languageKey].resultTitle}
        resultLabel={languages[languageKey].resultLabel}
      />
    </Container>
  );
}

export default App;
