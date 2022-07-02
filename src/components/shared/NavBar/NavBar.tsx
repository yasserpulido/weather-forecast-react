import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <b>Weather Forecast</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav>
              <Nav.Link href="#action1">Boston</Nav.Link>
              <Nav.Link href="#action2">Buenos Aires</Nav.Link>
              <Nav.Link href="#action3">Caracas</Nav.Link>
              <Nav.Link href="#action4">Ciudad de Panamá</Nav.Link>
              <Nav.Link href="#action5">Porto Alegre</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
