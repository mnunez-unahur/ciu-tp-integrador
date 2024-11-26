import React, { useState, useEffect } from 'react';

import { Form, Button, Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



function SearchBar({ value, onChange, placeholder}) {
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        setBusqueda(value)
    }, [value]);


    return (
        <Container style={{marginBottom: '20px'}}>
            <Row>
                <Col xs={8} md={9}>
                    <Form.Control type="text" 
                        placeholder={placeholder}
                        value={busqueda}
                        onChange={(e) => { setBusqueda(e.target.value) }}
                    />
                </Col>
                <Col >
                    <Button
                        onClick={() => { onChange(busqueda) }}
                        variant="primary"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                </Col>
            </Row>
        </Container>
    );
}
export default SearchBar;

