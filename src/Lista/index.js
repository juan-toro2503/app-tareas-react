import React from "react";
import '../css/style.css';
/* import {Tarea} from "./Tarea" */

function Lista(props){

    //recibimos los props (todos los hijos), prop.children sirve para identificar todos los componentes hijos
    return(
        <ul>
            
            {props.children}
        </ul>
    )
}

export {Lista}