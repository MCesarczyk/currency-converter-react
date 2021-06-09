import Container from "./Container";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";

function App() {

  return (
    <Container>
      <Form
        depositTitle="e-kantor"
        title="Wpłacasz:" 
        listTitle="Aktualny kurs"
        list={<List/>}
        resultTitle="Otrzymana kwota"
        resultLabel="Dostajesz:"
        buttons={<Buttons />}
      />
    </Container>
  );
}

export default App;
