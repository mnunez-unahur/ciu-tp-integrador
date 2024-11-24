import React, { useState, useEffect } from 'react';

import SearchBar from '../components/SearchBar'
import ProductCard from '../components/ProductCard'

// importamos los modelos
import {getProductos} from '../services/productos';

function Catalogo() {
    const [busqueda, setBusqueda] = useState("cosito del coso");
    const [listaProductos, setListaProductos] = useState([]);
    const [productosFiltrados, setProductosFiltrados] = useState([]);


    const filtrar = (texto) => {
        setBusqueda(texto)
        texto = texto.toLowerCase()
        const pf = listaProductos.filter((p)=>p.nombre.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto))
        setProductosFiltrados(pf)
      };

    useEffect(() => {
        console.log("limpiando")
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

    <div>
        <SearchBar value={busqueda} onChange={filtrar} />
        <ul>
        {productosFiltrados.map(producto => (
            <li>
            <span>{producto.nombre}</span>
            <span>{producto.descripcion}</span>
            </li>
        ))}
        </ul>
    </div>
    );
}
export default Catalogo;