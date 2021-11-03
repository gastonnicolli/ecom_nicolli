import React from 'react';
import { CartProvider} from './context/cartContext';
import Routes from "./componets/routes/Routes"
import './App.css';
function App() {
  return (
      <div className="App">
        <CartProvider>
          <Routes />
        </CartProvider>
      </div>
  );
}

export default App;
