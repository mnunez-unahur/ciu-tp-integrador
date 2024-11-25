import { Button, Modal, Row, Col, Image, Table, Tabs, Tab } from 'react-bootstrap';
import { useEffect, useState } from 'react';


import { getProducto, getFabricantesDeProducto, getComponentesDeProducto } from '../services/productos';


export default function DetalleProducto({ idProducto, onHide, show }) {
  const [datosProducto, setDatosProducto] = useState({});
  const [listaFabricantes, setListaFabricantes] = useState([]);
  const [listaComponentes, setListaComponentes] = useState([]);

  async function getP(id) {
    const datos = await getProducto(id)
    const fabricantes = await getFabricantesDeProducto(id)
    const componentes = await getComponentesDeProducto(id)
    setDatosProducto(datos)
    setListaFabricantes(fabricantes)
    setListaComponentes(componentes)
  }

  const imgStyles = {
    width: '150px',
    height: '150px',
    margin: '20px'
  };

  useEffect(() => {
    if (show && idProducto > 0) {
      getP(idProducto)
    } else if (!show) {
      setDatosProducto({})
    }
  }, [show, idProducto]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {datosProducto.nombre}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs
          defaultActiveKey="destalle"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="destalle" title="Detalles">
            <Row>
              <Col xs="12" sm="5" lg="3"><Image src={datosProducto.pathImg} style={imgStyles} /></Col>
              <Col xs="12" sm="5" lg="8" >
                <p>{datosProducto.descripcion}</p>
                <p>${datosProducto.precio}</p>
              </Col>

            </Row>
          </Tab>
          <Tab eventKey="fabricantes" title="Fabricantes">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Dirección</th>
                  <th>Contacto</th>
                </tr>
              </thead>
              <tbody>
                {listaFabricantes.map(c => (
                  <tr>
                    <td>{c.nombre}</td>
                    <td>{c.direccion}</td>
                    <td>{c.numeroContacto}</td>
                  </tr>
                )
                )}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="componentes" title="Componentes" >
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                {listaComponentes.map(c => (
                  <tr>
                    <td>{c.nombre}</td>
                    <td>{c.descripcion}</td>
                  </tr>
                )
                )}
              </tbody>
            </Table>
          </Tab>
        </Tabs>


      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

