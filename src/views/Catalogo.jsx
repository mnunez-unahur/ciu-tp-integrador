import React, { useState, useEffect } from 'react';

import { Row, Col, Breadcrumb, Button, Badge, Container } from 'react-bootstrap';

import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'
import DetalleProducto from '../components/DetalleProducto'
import DetalleCarrito from '../components/DetalleCarrito'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


import { getProductos } from '../services/productos';



function Catalogo() {
  const [busqueda, setBusqueda] = useState("cosito del coso");
  const [listaProductos, setListaProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [carrito, setCarrito] = useState([])
  const [mostrarDetalles, setMostrarDetalles] = React.useState(false);
  const [productoActual, setProductoActual] = React.useState(0);
  const [mostrarCarrito, setMostrarCarrito] = React.useState(false);


  const filtrar = (texto) => {
    setBusqueda(texto)
    texto = texto.toLowerCase()
    console.log(listaProductos)
    const pf = listaProductos.filter((p) => p.nombre.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto))
    setProductosFiltrados(pf)
  };

  useEffect(() => {
    filtrar("")
  }, [listaProductos]);


  async function getP() {
    const prods = await getProductos()
    setListaProductos(prods)
  }

  useEffect(() => {
    getP()
  }, []);

  function editarProducto(id) {
    setProductoActual(id)
    setMostrarDetalles(true)
  }

  function cerrarDialogoProducto() {
    setProductoActual(0)
    setMostrarDetalles(false)
  }

  function agregarQuitarCarrito(id, agregar) {
    let prod = listaProductos.find(p => p.id == id)
    if (!prod) {
      console.error(`no se encontro el producto ${id}`)
      return
    }
    prod = {...prod}

    if (agregar) {
      prod.cantidad = 1
      const productos = [...carrito]
      productos.push(prod)
      setCarrito(productos)
    } else {
      const productos = carrito.filter(p => {
        return p.id != id
      })
      setCarrito(productos)
    }
  }

  function estaEnCarrito(id) {
    const idx = carrito.findIndex(c=> c.id == id)
    return idx >= 0
  }

  return (

    <Container>
      <Breadcrumb>
        <Breadcrumb.Item active>Inicio</Breadcrumb.Item>
        <Breadcrumb.Item active>Catalogo</Breadcrumb.Item>
      </Breadcrumb>
      <Button
        onClick={()=>{setMostrarCarrito(true)}}
        style={{ position: "fixed", top: "50px", right: "50px", zIndex: "1000" }}>
        <FontAwesomeIcon icon={faCartShopping} />
        <Badge bg="secondary">  {carrito.length}</Badge>
      </Button>
      <SearchBar value={busqueda} onChange={filtrar} placeholder='Buscar producto...' />
      {productosFiltrados.map(p => (
        <Row key={p.id}>
          <Col style={{ padding: "10px" }}>
            <ProductCard
              id={p.id}
              nombre={p.nombre}
              descripcion={p.descripcion}
              precio={p.precio}
              img={p.pathImg}
              onChangeCarrito={agregarQuitarCarrito}
              enCarrito={estaEnCarrito(p.id) }
              onEdit={editarProducto}
            />

          </Col>
        </Row>
      ))}
      <DetalleProducto
        idProducto={productoActual}
        show={mostrarDetalles}
        onHide={cerrarDialogoProducto}
      />

      <DetalleCarrito
        carrito={carrito} onChange={c => {setCarrito(c)}}
        show={mostrarCarrito}
        onHide={() => { setMostrarCarrito(false) }}

      />

    </Container>
  );
}
export default Catalogo;