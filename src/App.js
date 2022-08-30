import 'bootstrap/dist/css/bootstrap.min.css';
import "./app/styles.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemList from "./components/ItemList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer productos={<ItemList />}/>
    </div>
  );
}

export default App;
