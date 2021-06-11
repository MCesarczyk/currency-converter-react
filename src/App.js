import Container from "./Container";
import Form from "./Form";
import Buttons from "./Buttons";

function App() {

  return (
    <Container>
      <Form
        inputTitle="e-kantor"
        title="Wpłacasz:"
        listTitle="Aktualny kurs"
        resultTitle="Otrzymana kwota"
        resultLabel="Dostajesz:"
        buttons={<Buttons />}
      />
    </Container>
  );
}

export default App;
