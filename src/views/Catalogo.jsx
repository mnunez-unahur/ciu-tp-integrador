import React, { useState, useEffect } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'

import Container from 'react-bootstrap/Container';
// importamos los modelos
import { getProductos } from '../services/productos';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Catalogo() {
    const [busqueda, setBusqueda] = useState("cosito del coso");
    const [listaProductos, setListaProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);
    const [carrito, setCarrito] = useState([])


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


    useEffect(() => {
        async function getP() {
            const prods = await getProductos()
            console.log(prods)
            setListaProductos(prods)
        }
        getP()
    }, []);

    // useEffect(()=> {
    //     console.log(carrito)
    // },[carrito])

    function agregarQuitarCarrito(id, estado) {

        if (estado) {
            const productos = [...carrito]
            productos.push(id)
            setCarrito(productos)
        } else {
            const productos = carrito.filter(p => {
                return p != id
            })
            setCarrito(productos)
        }
    }

    return (

        <Container>
            <Breadcrumb>
                <Breadcrumb.Item active>Inicio</Breadcrumb.Item>
                <Breadcrumb.Item active>Catalogo</Breadcrumb.Item>
            </Breadcrumb>
            <Button style={{position:"fixed", top:"50px",right:"50px", zIndex: "1000"}}><FontAwesomeIcon icon={faCartShopping} /> <Badge bg="secondary">  {carrito.length} </Badge></Button>
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
                            enCarrito={carrito.includes(p.id)}
                        />

                    </Col>
                </Row>
            ))}

        </Container>
    );
}
export default Catalogo;