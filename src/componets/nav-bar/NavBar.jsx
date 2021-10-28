import React from "react";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

import CartWidget from "../cartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar className="navbar" bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
        <Link to="/">Tienda EcoNutrición</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
            <NavLink exact to="/" activeClassName="selected">
                Inicio
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink exact to="/cart" activeClassName="selected">
                Carrito de compras
              </NavLink>
            </Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to="/category/cereales" activeClassName="selected">
                  Cereales
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/category/Legumbres" activeClassName="selected">
                  Legumbres
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/category/Harinas" activeClassName="selected">
                  Harinas
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item>
                <NavLink to="/category/Mieles" activeClassName="selected">
                  Mieles
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget quantity={3} />
      </Container>
    </Navbar>
  );
};

export default NavBar;
