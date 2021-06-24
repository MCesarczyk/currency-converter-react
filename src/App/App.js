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
        resultAnnotation="*wg kursu z dnia 24/06/2021"
      />
    </Container>
  );
}

export default App;