import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];
  const handleSelectItem = (item: string) => console.log(item);

  return (
    <div>
      {/* <ListGroup items={items} heading="List" onSelectItem={handleSelectItem} /> */}
      <Alert>Html Content</Alert>
    </div>
  );
}

export default App;
