
import { Card,Container,Row, Col, Image } from 'react-bootstrap';
export default function ProductCard({ nombre, descripcion, precio, img }) {
    const pathImg = `/${img}`
    const imgStyles = {
        width: 'calc(100% - 40px)',
        height: '150px',
        margin: '20px'
    };

    return (
        <Card style={{}}>

            <Card.Body style={{ display: 'flex', height: '150px' }}>
                <Container>
                    <Row>
                        <Col xs="12" lg="3"> <Image href={pathImg}> </Image></Col>
                        <Col xs="12" lg="7">contenido</Col>
                        <Col xs="12" md="2" lg="1">botones</Col>
                    </Row>
                </Container>


            </Card.Body>
        </Card>
    );
}

