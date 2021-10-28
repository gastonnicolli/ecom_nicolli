import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../nav-bar/NavBar";
import CartContainer from "../../container/cartContainer/cartContainer";
import ItemListContainer from "../../container/itemListContainer/ItemListContainer";
import NotFound from "../../layouts/notFound/NotFound";
import ItemDetailContainer from "../../container/itemDetailContainer/ItemDetailContainer";

const Routes = () => {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>
          <Route path="/item/:itemId">
            <ItemDetailContainer />
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