import { useState } from 'react';
import './formulario.css'
import Campo from '../campo'
import ListaOpciones from '../listaOpciones'
import Boton from '../boton'

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState('');
    const [puesto, actualizarPuesto] = useState('');
    const [foto, actualizarFoto] = useState('');
    const [equipo, actualizarEquipo] = useState('');

    const [titulo, actualizarTitulo] = useState('');
    const [color, actualizarColor] = useState('');

    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (event) => {
        event.preventDefault();
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo,
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (event) => {
        event.preventDefault();
        crearEquipo({ titulo, colorPrimario: color });
    }

    return  <section className='formulario'>
                <form onSubmit={manejarEnvio}>
                    <h2>Rellena el formulario para crear el colaborador.</h2>
                    <Campo
                        titulo="Nombre"
                        placeholder="Ingresar nombre"
                        valor={nombre}
                        actualizarValor={actualizarNombre}
                        required
                    />
                    <Campo
                        titulo="Puesto"
                        placeholder="Ingresar puesto"
                        valor={puesto}
                        actualizarValor={actualizarPuesto}
                        required
                    />
                    <Campo
                        titulo="Foto"
                        placeholder="Ingresar enlace de foto"
                        valor={foto}
                        actualizarValor={actualizarFoto}
                        required
                    />
                    <ListaOpciones
                        valor={equipo}
                        actualizarEquipo={actualizarEquipo}
                        equipos={props.equipos}
                    />
                    <Boton>crear</Boton>
                </form>
                <form onSubmit={manejarNuevoEquipo}>
                    <h2>Rellena el formulario para crear el equipo.</h2>
                    <Campo
                        titulo="Titulo"
                        placeholder="Ingresar titulo"
                        valor={titulo}
                        actualizarValor={actualizarTitulo}
                    />
                    <Campo
                        type="color"
                        titulo="Color"
                        placeholder="Ingresar el Hex"
                        valor={color}
                        actualizarValor={actualizarColor}
                    />
                    <Boton>Registrar equipo</Boton>
                </form>
            </section>
}

export default Formulario