
import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
export default function ProductCard({ id, nombre, descripcion, precio, img, enCarrito, onChangeCarrito }) {
    const pathImg = `/${img}`
    const imgStyles = {
        width: '150px',
        height: '150px',
        margin: '20px'
    };
    useEffect(() => {
        console.log(enCarrito)
    }, [enCarrito]);
    
    return (
        <Card style={{}}>

            <Card.Body >

                <Row>
                    <Col xs="12" sm="5" lg="3"><Image src={pathImg} style={imgStyles} /></Col>
                    <Col xs="12" sm="5" lg="8" >
                        <h3>{nombre}</h3>
                        <p>{descripcion}</p>
                        <p>${precio}</p>
                    </Col>
                    <Col xs="12" sm="2" lg="1">
                        {(enCarrito) ?
                            (<Button variant='danger' onClick={() => { onChangeCarrito(id,false) }}><FontAwesomeIcon icon={faCartShopping} /></Button>) :

                            (<Button variant='primary' onClick={() => { onChangeCarrito(id,true) }}><FontAwesomeIcon icon={faCartShopping} /></Button>)
                        }
            
                        
                        </Col>
                </Row>

            </Card.Body>
        </Card>
    );
}

