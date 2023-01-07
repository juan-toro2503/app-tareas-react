import React from "react";
import '../css/style.css';
import { TareaContext } from "../tareasContext";
function TareaFormulario(){
    const {agregarTarea,setOpenModal}=React.useContext(TareaContext)
    const [valueTarea,setValue]=React.useState('')
    const tareaValue=(event)=>{

        
            setValue(event.target.value)
       
            
        
        
        
    }
    const tarea=()=>{
        if(!valueTarea){
            alert("Debes ingresar una tarea...")
           
        }else{
            
            agregarTarea(valueTarea)
            setOpenModal(false)
        }
        
        

    }
    const cerrar=()=>{
        setOpenModal(false)
    }
    
    
    return(
        <div className="formulario">
            <h2>Crea una nueva tarea...</h2>
            <textarea onChange={tareaValue} />
            <button onClick={cerrar} className={"cerrar"} >Cancelar</button>
            <button onClick={tarea} >Crear tarea</button>
        </div>
    )
}

export {TareaFormulario};