import ListGroup from "./components/ListGroup";
import Message from "./Message";

function App() {
    const items = ["Meskiana", "Oum El Bouaghi", "Alger", "Oran", "Annaba"];
  
  return (
    <ListGroup items = {items} heading = "Cities"></ListGroup>
  );
}

export default App;
