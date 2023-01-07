import React from "react";
import { useLocalStorage } from "./useLocalStorage";


//creamos el context para poder enviarle las propiedades a nuestros componentes de una manera mas facil utilizando el providery e consumer
const TareaContext=React.createContext();
function TareaProvider(props){

  //aqui tenemos los estados de nuestros componentes, utilizamos los custom hoooks y los hooks de react

  //los estados tienen estan compuestos por un array el cual contiene ["estado",funcion(la cual cambia el estado)]
  const {item:tareas,guardarTareas,loading,error}=useLocalStorage("tareas_v1",[])  
  const [buscador,setBuscador]=React.useState('')

  //creamos el estado para nuestro modal
  const [openModal,setOpenModal]=React.useState(false)

  

  //tenemos un filtro de nuestra tareas completadas 
  const tareasCompletadas=tareas.filter(tarea=>(!!tarea.estado)).length
  const totalTareas=tareas.length
  let buscarTareas;

  //creamos una condicion para saber si hay tareas en nuestra lista y asi poderlas filtrar
  if (!buscador.length >=1){
    buscarTareas=tareas


  }else{
    //cramos una variable la cual va a contener una la coincidencia entre el valor ingresado y el de nuestra lista
    buscarTareas=tareas.filter(tarea=>{
      let tareaTexto=tarea.texto.toLowerCase()
      let buscadorValue=buscador.toLowerCase()
      return tareaTexto.includes(buscadorValue) 
    })
    
    
  }

 
//creamos una funcion para filtrar para encontrar la posicion del componente seleccionado y poder cambiarle el estado
  const completarTarea=(texto)=>{
    let completar=tareas.findIndex(tarea=>tarea.texto===texto)
    const newTareas=[...tareas]
    newTareas[completar].estado=true

    //si completamos una tarea enviamos la nueva lista a nuestro hook
    guardarTareas(newTareas)
  }
  //hacemos la misma funcion anterior pero para este caso lo vamos a eliminar de nuestra lista
  const eliminarTarea=(texto)=>{
    let eliminar=tareas.findIndex(tarea=>tarea.texto===texto)
    const newTareas=[...tareas]
    newTareas.splice(eliminar,1)
    //si eliminamos una tarea enviamos la nueva lista a nuestro hook
    guardarTareas(newTareas)

    
  }
  const agregarTarea=(value)=>{
    const newTareas=[...tareas]
    newTareas.push({texto:value,estado:false})
    guardarTareas(newTareas)



  }
  //ahora retornamos las variables las cuales seran utilizadas por nuestro consumer para ser consumidas por cada componente
    return(
        <TareaContext.Provider value={{
        tareasCompletadas,
        totalTareas,
        buscador,
        setBuscador,
        buscarTareas,
        completarTarea,
        eliminarTarea,
        loading,
        error,
        openModal,
        setOpenModal,
        agregarTarea,

        }}>

            {props.children}
        </TareaContext.Provider>
    )
} 
//creamos nuestro consumer

<TareaContext.Consumer></TareaContext.Consumer>

export {TareaProvider,TareaContext};