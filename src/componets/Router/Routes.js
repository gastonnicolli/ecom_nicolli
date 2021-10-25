import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemListContainer from '../../layouts/itemListContainer/ItemListContainer';
import NavBar from '../nav-bar/NavBar';
import ItemDetailContainer from '../../layouts/itemDetailContainer/ItemDetailContainer'

const Routes = () =>{
    return(
        <BrowserRouter>
            <NavBar></NavBar>
            <Switch>
                <Route exact path="/">
                    <ItemListContainer />
                </Route>
                <Route path="/item/:id">
                    <ItemDetailContainer/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;