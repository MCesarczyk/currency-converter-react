import { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Switcher from "./Switcher";
import languages from "./languages";
import { useLocalStorageState } from "./useLocalStorageState";

function App() {

  const [language, setLanguage] = useLocalStorageState("language", "EN");

    return (
    <Container>
      <Switcher
        languages={languages}
        language={language}
        setLanguage={setLanguage}
      />
      <Form
        languages={languages}
        language={language}
        inputTitle={languages[language].inputTitle}
        inputLabel={languages[language].inputLabel}
        listTitle={languages[language].listTitle}
        resultTitle={languages[language].resultTitle}
        resultLabel={languages[language].resultLabel}
      />
    </Container>
  );
}

export default App;