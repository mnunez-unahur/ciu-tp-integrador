import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SearchBar({value, onChange}) {
    const [busqueda, setBusqueda] = useState("");
    
    useEffect(() => {
        setBusqueda(value)
    }, [value]);


    return (
        <Container>
            <Row>
                <Col xs={8} md={9}>
                    <Form.Control type="text" 
                    value={busqueda} 
                    onChange={(e)=>{setBusqueda(e.target.value)}} 
                    />
                </Col>
                <Col >
                    <Button 
                        onClick={()=>{onChange(busqueda)}}
                        variant="primary"
                        >Buscar</Button>
                </Col>
            </Row>
      </Container>
    );
}
export default SearchBar;

