import React from "react";
import '../css/style.css';
import { TareaContext } from "../tareasContext";



function Contador(){
    //utilizando el React.useContext(context) ya no tendremos que enviar ni recibir las props en nuestro componente
    const {tareasCompletadas,totalTareas}=React.useContext(TareaContext)
    return(
        <h1>Tienes {tareasCompletadas} de {totalTareas} tareas completadas</h1>

    )
}


// de esta forma obligamos a que se debe importar con el mismo nombre del componente y las llaves

export {Contador}