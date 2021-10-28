import React from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";
import Switch from "react-router/Switch";
import Route from "react-router-dom/Route";
import NavBar from "../nav-bar/NavBar";
import CartContainer from "../../container/cartContainer/cartContainer";
import ItemListContainer from "../../container/itemListContainer";
import NotFound from "../../layouts/notFound/NotFound";
import Inicio from "../inicio/Inicio"
import Concejos from "../concejos/Concejos"

const Routes = () => {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Inicio />
          </Route>
          <Route exact path="/productos">
            <ItemListContainer />
          </Route>
          <Route path="/concejos">
            <Concejos />
          </Route>
          <Route path="/cart">
            <CartContainer />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;