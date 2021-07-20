import { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Switcher from "./Switcher";
import languages from "./languages";

function App() {

  const [language, setLanguage] = useState("EN");

    return (
    <Container>
      <Switcher
        languages={languages}
        language={language}
        setLanguage={setLanguage}
      />
      <Form
        inputTitle={languages.EN.inputTitle}
        inputLabel={languages.EN.inputLabel}
        listTitle={languages.EN.listTitle}
        resultTitle={languages.EN.resultTitle}
        resultLabel={languages.EN.resultLabel}
      />
    </Container>
  );
}

export default App;