import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

