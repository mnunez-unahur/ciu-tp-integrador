
import React, { useState, useEffect } from 'react';

import Table from 'react-bootstrap/Table';

import Container from 'react-bootstrap/Container';
import { getComponentes } from '../services/componentes';
import SearchBar from '../components/SearchBar';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Componentes() {
    const [listaComponentes, setlistaComponentes] = useState([]);

    const [busqueda, setBusqueda] = useState("cosito del coso");
    const [componentesFiltrados, setComponentesFiltrados] = useState([]);


    const filtrar = (texto) => {
        setBusqueda(texto)
        texto = texto.toLowerCase()
        const pf = listaComponentes.filter((p) => p.nombre.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto))
        setComponentesFiltrados(pf)
    };

    useEffect(() => {
        filtrar("")
    }, [listaComponentes]);

    useEffect(() => {
        async function getP() {
            console.log("hola")
            const componentes = await getComponentes()
            setlistaComponentes(componentes)
        }
        getP()
    }, []);



    return (
        <Container>
            <Breadcrumb>
                <Breadcrumb.Item active>Inicio</Breadcrumb.Item>
                <Breadcrumb.Item active>Componentes</Breadcrumb.Item>
            </Breadcrumb>
            <SearchBar value={busqueda} onChange={filtrar} placeholder='Buscar componente...' />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {componentesFiltrados.map(c => (
                        <tr>
                            <td>{c.id}</td>
                            <td>{c.nombre}</td>
                            <td>{c.descripcion}</td>
                        </tr>
                    )
                    )}
                </tbody>
            </Table>

        </Container>
    );
}

export default Componentes;