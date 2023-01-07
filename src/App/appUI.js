import React from "react";
import {Contador} from "../Contador"
import {Buscador} from "../Buscador"
import { BotonAgregar } from "../BotonAgregar";
import {Lista} from "../Lista"
import {Tarea} from "../Tarea"
import { TareaContext } from "../tareasContext";
import { Modal } from "../modal";
import { TareaFormulario } from "../tareaFormulario";
import '../css/style.css';

function AppUI(){
//aqui utilizamos un hook de react para evitar poner en cada componente el consumer
 const {
  buscarTareas,
  completarTarea,
  eliminarTarea,
  loading,
  error,
  openModal,
  setOpenModal, 
}= React.useContext(TareaContext)


  return(    

    //aqui creamos un componente padre para enviarle a nuestra App para que sea renderizada
  <React.Fragment>


     <Contador />
    <Buscador  /> 
    
            <Lista>
            {error && <h2>Lo sentimos hubo un error...</h2>}
            {loading && <h2>Cargando...</h2>}
            {(!loading && !buscarTareas.length) && <h2>Crea tu primer tarea...</h2>}
            {buscarTareas.map(item => {
              return(<Tarea key={item.texto} texto={item.texto} estado={item.estado} completado={()=>completarTarea(item.texto)} eliminarTarea={()=>{eliminarTarea(item.texto)}} />)
              
            })}
          </Lista>

    {openModal && (
      <Modal>
      <TareaFormulario></TareaFormulario>
     </Modal>
     )

     }
     <BotonAgregar setOpenModal={setOpenModal} openModal={openModal} /> 
     
    



  </React.Fragment>)

}

//exportamos nuestro componente
export{AppUI}
