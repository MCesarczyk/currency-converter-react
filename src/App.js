import Container from "./Container";
import List from "./List";
import Buttons from "./Buttons";
import Form from "./Form";

function App() {

const addAmount = () => (
  {}
);

  return (
    <Container>
      <Form
        depositTitle="e-kantor"
        title="Wpłacasz:" 
        addAmount={addAmount}
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
