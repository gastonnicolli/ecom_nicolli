import './App.css';
import NavBar from './componets/nav-bar/NavBar';
import ItemListContainer from './container/itemListContainer/ItemListContainer';
import Promises from './componets/promises/Promises';
import {products} from './data/products'

function App() {
  return (
    <div>
      <NavBar />
      <Promises products={products}></Promises>
      <ItemListContainer greeting='Bienvenido' />
      
    </div>
  );
}

export default App;
