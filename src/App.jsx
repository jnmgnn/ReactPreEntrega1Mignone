import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/Navbar/Navbar";

function App() {
  return (
    <main>
      <Navbar />
      <ItemListContainer texto={'Página en Construcción :D'}/>
    </main>
  );
}

export default App;