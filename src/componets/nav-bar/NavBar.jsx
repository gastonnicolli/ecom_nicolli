import React from "react";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import CartWidget from "../cartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tienda EcoNutrición</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/itemList">Productos</Nav.Link>
            <Nav.Link href="/concejos">Concejos</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Cereales</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Legumbres</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Harinas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Mieles</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget quantity={3} />
      </Container>
    </Navbar>
  );
};

export default NavBar;
