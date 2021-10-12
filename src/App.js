import './App.css';
import NavBar from './componets/nav-bar/NavBar';
import ItemListContainer from './componets/itemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting='Bienvenido' />
    </div>
  );
}

export default App;
