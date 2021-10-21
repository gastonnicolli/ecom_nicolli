import './App.css';
import NavBar from './componets/nav-bar/NavBar';
import ItemListContainer from './componets/itemListContainer/ItemListContainer';
import Promises from './componets/promises/Promises';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting='Bienvenido' />
      <Promises></Promises>
    </div>
  );
}

export default App;
