import React, { useState, useEffect } from 'react';

import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'

import Container from 'react-bootstrap/Container';
// importamos los modelos
import { getProductos } from '../services/productos';

function Catalogo() {
    const [busqueda, setBusqueda] = useState("cosito del coso");
    const [listaProductos, setListaProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);


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


    return (

        <Container>
            <SearchBar value={busqueda} onChange={filtrar} placeholder='Buscar producto...'/>
            <ul>
                {productosFiltrados.map(producto => (
                    <li key={producto.id}>
                        <span>{producto.nombre}</span>
                        <span>{producto.descripcion}</span>
                    </li>
                ))}
            </ul>
        </Container>
    );
}
export default Catalogo;