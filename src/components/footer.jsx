
import { Container, Row, Col, Nav } from 'react-bootstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function AppFooter() {

    return (
        <footer
        style={{
            backgroundColor: "#333",
            color: "white",
            padding: "10px 100px",  // buscar otra forma de hacerlo
        }}>
        <Container>
            <Row >
                <Col md={3}>
                    <h6>INTEGRANTES</h6>
                    <p>
                        <span>Ferrara Lucas</span>
                        <br />
                        <span>Lenis Jonathan</span>
                        <br />
                        <span>Martinez Lautaro</span>
                        <br />
                        <span>Nunez Manuel</span>
                    </p>
                </Col>
                <Col md={2}>
                    <h6>EMPRESA</h6>
                    <Nav className="flex-column">
                        <Nav.Link href="#acerca">Acerca de nosotros</Nav.Link>
                        <Nav.Link href="#calidad">Calidad</Nav.Link>
                        <Nav.Link href="#equipo">Equipo</Nav.Link>
                    </Nav>
                </Col>

                <Col md={2}>
                    <h6>RECURSOS</h6>
                    <Nav className="flex-column">
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#productos">Productos más recientes</Nav.Link>
                        <Nav.Link href="#fabricantes">Nuevos fabricantes</Nav.Link>
                        <Nav.Link href="#aplicaciones">Aplicaciones</Nav.Link>
                        <Nav.Link href="#servicios">Servicios y herramientas</Nav.Link>
                    </Nav>
                </Col>

                <Col md={2}>
                    <h6>SOPORTE</h6>
                    <Nav className="flex-column">
                        <Nav.Link href="#contacto">Contáctenos</Nav.Link>
                        <Nav.Link href="#ayuda">Ayuda</Nav.Link>
                        <Nav.Link href="#comentarios"> Comentarios</Nav.Link>
                        <Nav.Link href="#soporte">Soporte del navegador</Nav.Link>
                        <Nav.Link href="#cookies">Política de cookies</Nav.Link>
                    </Nav>
                </Col>

                <Col md={3}>
                    <h6>CONÉCTESE CON NOSOTROS</h6>
                    <Nav>
                        <Nav.Link href="#facebook"> <FontAwesomeIcon icon={faEnvelope} />Facebook</Nav.Link>
                        <Nav.Link href="#twitter">  <FontAwesomeIcon icon={faEnvelope} /> Twitter</Nav.Link>
                        <Nav.Link href="#instagram"> <FontAwesomeIcon icon={faEnvelope} />Instagram</Nav.Link>
                        <Nav.Link href="#linkedin"><FontAwesomeIcon icon={faEnvelope} /> LinkedIn</Nav.Link>
                        <Nav.Link href="#email"><FontAwesomeIcon icon={faEnvelope} />Email</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
        </footer>

    );

}

export default AppFooter;