
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './App.css';
import Header from './componentes/header';
import Formulario from './componentes/formulario';
import MiOrg from './componentes/miOrg';
import Equipo from './componentes/equipo';
import Footer from './componentes/footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);

  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor en Alura Latam",
      favorito: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysR-dev.png",
      nombre: 'Genesys Rondón',
      puesto: 'Desarrolladora de software e instructora',
      favorito: false
    }, 
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: 'Jeanmarie Quijada',
      puesto: 'Instructora en Alura Latam',
      favorito: true
    }, 
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: 'Christian Velasco',
      puesto: 'Head de Alura e instructor',
      favorito: false
    }, 
    {
      id: uuid(),
      equipo: "Innovación y  Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: 'Jose Gonzalez',
      puesto: 'Dev. FullStack',
      favorito: false
    }, 
  ]);

  const [equipos, actualizarEquipos] = useState([
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: '#57C278',
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario: '#82CFFA',
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: '#A6D157',
      },
      {
        id: uuid(),
        titulo: "Devops",
        colorPrimario: '#E06B69',
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: '#DB6EBF',
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario: '#FFBA05',
      },
      {
        id: uuid(),
        titulo: "Innovación y  Gestión",
        colorPrimario: '#FF8A29',
      }
  ]) 

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //Actualizar Favorito
  const like =(id)=>{
    console.log('like',id);
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if(colaborador.id === id){
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador
    }) 
    actualizarColaboradores(colaboradoresActualizados);
  }  

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log('nuevo colaborador', colaborador);
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar Colaborador
  const eliminarColaborador =(id)=>{
    console.log('Eliminar colaborador', id);
    const nuevosColaboradors = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradors);
  }

  //Actualizar color de equipos
  const actualizarColor =(color, id)=>{ 
    console.log('Actualizar: ', color, id)
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
 
  //Crear Equipo
  const crearEquipo = (nuevoEquipo)=>{ 
    actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid()}])
  }

  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />)
      }
      <Footer />
    </div>
  );
}

export default App;
