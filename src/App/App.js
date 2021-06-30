import Container from "./Container";
import Form from "./Form";

function App() {

  return (
    <Container>
      <Form
        inputTitle="e-kantor"
        title="Wpłacasz:"
        listTitle="Aktualny kurs"
        resultTitle="Otrzymana kwota"
        resultLabel="Dostajesz:"
      />
    </Container>
  );
}

export default App;