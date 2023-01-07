import React from "react";
import '../css/style.css';
import { TareaContext } from "../tareasContext";

function Buscador(){
    //creamos una funcion la cual va a estar al pendiente de cada cambio y llamara al estado y le cambiara su valor 
    const {buscador,setBuscador}=React.useContext(TareaContext)
    const cambio=(event)=>{
        setBuscador(event.target.value)
        console.log(event.target.value)

    }
    //por medio de las props recibimos el estado de nuestro input y lo guardamos en value para poder ser leido y comparado 
    return(
        <input 
        value={buscador}
        onChange={cambio}
        placeholder="sandwich"/>
    )
}

export {Buscador}