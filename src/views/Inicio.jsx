import { Row, Col, Breadcrumb, Button, Badge, Container } from 'react-bootstrap';

import CarouselInicio from '../components/Carousel';
import Map from '../components/Map';
import Video from '../components/Video';

function Inicio() {
    return (
    <Container>
    <Row style={{marginBottom:"40px"}}>
        <Col>
            <CarouselInicio />
        </Col>
    </Row>
    
    <Row style={{marginBottom:"40px"}}>
        <Col>
            <Map/>
        </Col>
        <Col>
            <Video/>
        </Col>
    </Row>

    
    </Container>
    );
}
export default Inicio;