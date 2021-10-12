import React from "react";
import { Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import CartWidget from "../cartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tienda EcoNutriciòn</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categorìa 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Categorìa 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Categorìa 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Categorìa 4</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <CartWidget quantity={3} />
      
      </Container>
    </Navbar>
  );
};

export default NavBar;
