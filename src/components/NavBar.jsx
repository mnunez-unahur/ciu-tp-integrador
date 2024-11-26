import { Container, Nav, Navbar } from 'react-bootstrap'

import { LinkContainer } from 'react-router-bootstrap'



function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" style={{ position: "sticky" }}>
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

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;