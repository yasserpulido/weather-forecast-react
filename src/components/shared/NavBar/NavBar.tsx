import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container fluid>
          <Link className="brand" to={"/"}>
            <b>Weather Forecast</b>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="nav-links">
              <NavLink
                to={"/weather/lat=42.361145&lon=-71.057083"}
                className={({ isActive }) =>
                  isActive ? "nav-links--active" : undefined
                }
              >
                Boston
              </NavLink>
              <NavLink
                to={"/weather/lat=-34.603722&lon=-58.381592"}
                className={({ isActive }) =>
                  isActive ? "nav-links--active" : undefined
                }
              >
                Buenos Aires
              </NavLink>
              <NavLink
                to={"/weather/lat=10.500000&lon=-66.916664"}
                className={({ isActive }) =>
                  isActive ? "nav-links--active" : undefined
                }
              >
                Caracas
              </NavLink>
              <NavLink
                to={"/weather/lat=8.983333&lon=-79.516670"}
                className={({ isActive }) =>
                  isActive ? "nav-links--active" : undefined
                }
              >
                Panama
              </NavLink>
              <NavLink
                to={"/weather/lat=-30.033056&lon=-51.230000"}
                className={({ isActive }) =>
                  isActive ? "nav-links--active" : undefined
                }
              >
                Porto Alegre
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavBar;
