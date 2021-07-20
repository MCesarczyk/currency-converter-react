import Container from "./Container";
import Form from "./Form";
import Switcher from "./Switcher";
import languages from "./languages";

function App() {
  return (
    <Container>
      <Switcher
        languages={languages}
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