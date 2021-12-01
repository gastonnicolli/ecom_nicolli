import React, {useContext} from "react";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from '../../context/cartContext';
import "./NavBar.css";

import CartWidget from "../cartWidget/CartWidget";

const NavBar = () => {
  const {data}=useContext(CartContext)
  return (
    <Navbar id='navBar' className="navbar navbar-expand-lg">
      <Container>
        {/* {data.user 
          ? <Button onClick={data.logout}>Cerrar Sesión</Button>
          : <Button onClick={data.login}>Iniciar Sesión</Button>
        }
        <Navbar.Brand>
          {data.user ? `Hola ${data.user.name}` : 'Bienvenid@'}
        </Navbar.Brand> */}
        <Navbar.Brand>
          <Link to="/">Tienda EcoNutrición</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink exact to="/">
                Inicio
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink exact to="/cart">
                Carrito de compras
              </NavLink>
            </Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to="/category/1" activeClassName="selected">
                  Cereales
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/category/3" activeClassName="selected">
                  Legumbres
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/category/4" activeClassName="selected">
                  Harinas
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item>
                <NavLink to="/category/2" activeClassName="selected">
                  Mieles
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
