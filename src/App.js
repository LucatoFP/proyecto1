import NavBar from "./components/NavBar";
import "./app/styles.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer Productos={"Nos quedamos sin stock =P"}/>
    </div>
  );
}

export default App;
