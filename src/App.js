import React from 'react';
// import {CartContext} from './context/cartContext';
import Routes from "./componets/routes/Routes"
import './App.css';
function App() {
  return (
      <div className="App">
        {/* <CartContext.Provider value={[]}> */}
          <Routes />
        {/* </CartContext.Provider> */}
      </div>
    
  );
}

export default App;
