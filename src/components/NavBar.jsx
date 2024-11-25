import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'



function NavBar() {
  return (
          <Navbar expand="lg" className="bg-body-tertiary" style={{position:"sticky"}}>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand >Inicio</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/catalogo">
                        <Nav.Link>Catálogo</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/componentes">
                        <Nav.Link>Componentes</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/fabricantes">
                        <Nav.Link>Fabricantes</Nav.Link>
                    </LinkContainer>
                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
  );
}

export default NavBar;