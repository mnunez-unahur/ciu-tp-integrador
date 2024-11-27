import { useEffect, useState } from 'react';
import { Button, Modal, Row, Col, Image, Card, Form } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export default function DetalleCarrito({ carrito, onHide, show, onChange }) {
  const [total, setTotal] = useState(0);

  const imgStyles = {
    width: '150px',
    height: '150px',
    margin: '20px'
  };

  function handleCantidadChange(id, cantidad) {
    const nuevoCarrito = carrito.map((p => {
      return {
        ...p,
        cantidad: p.id == id ? parseInt(cantidad) : p.cantidad
      }
    }))
    onChange(nuevoCarrito)
  }

  function quitarDeCarrito(id) {
    const nuevoCarrito = carrito.map((p => {
      return {
        ...p
      }
    }))

    onChange(nuevoCarrito.filter(c => c.id != id))
  }


  useEffect(() => {
    const t = carrito.reduce((s, c)=> s + (c.cantidad * c.precio),      0 )
    setTotal(t)
  }, [carrito]);


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
          Mi Carrito
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card style={{}}>
          <Card.Body >
            {carrito.map(p => (

              <Row key={p.id}>
                <Col xs="12" sm="5" lg="3"><Image src={`/${p.pathImg}`} style={imgStyles} /></Col>
                <Col xs="12" sm="5" lg="8" >
                  <h3>{p.nombre}</h3>
                  <p>{p.descripcion}</p>
                  <p>${p.precio}</p>
                  <Row>
                    <Col>
                      <Form.Control size="lg" min="1" value={p.cantidad} onChange={(e) => { handleCantidadChange(p.id, e.target.value) }} type="number" />
                    </Col>
                    <Col>
                    <Button variant='danger' onClick={() => { quitarDeCarrito(p.id) }}><FontAwesomeIcon icon={faTrash} /></Button>
                    </Col>
                  </Row>
                </Col>
                <Col xs="12" sm="2" lg="1">
                </Col>
              </Row>
            ))}
          </Card.Body>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <b>Total Compra: $ {total}</b>
        <div style={{ flexGrow: 1 }}></div>
        { (carrito.length > 0) ?
          (<Button variant="success" onClick={onHide}>Comprar</Button>)  : <span></span>
        }

        <Button onClick={onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

