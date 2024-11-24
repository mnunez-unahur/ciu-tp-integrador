import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import ManufacturerCard from '../components/ManufacturerCard'

import {getFabricantes} from '../services/fabricantes';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Fabricantes() {
    const [listaFabricantes, setlistaFabricantes] = useState([]);


    useEffect(() => {
        async function getP() {
          console.log("hola")
            const fabricantes = await getFabricantes()
            setlistaFabricantes(fabricantes)
        }
        getP()
    }, []);



    return (
    <Container>
      <Breadcrumb>
                <Breadcrumb.Item active>Inicio</Breadcrumb.Item>
                <Breadcrumb.Item active>Fabricantes</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        {listaFabricantes.map(f => (
          <Col style={{padding: "10px", flexGrow: 0}}>
            <ManufacturerCard key={f.id}
              nombre={f.nombre}
              direccion={f.direccion}
              telefono={f.numeroContacto}
              img={f.pathImgPerfil}/>
          </Col>
          ))}
      </Row>
    </Container>

  );
}
export default Fabricantes;