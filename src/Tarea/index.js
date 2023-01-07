import React from "react";
import '../css/style.css';

function Tarea (props){

    //recibimos las propiedades y verificamos si su estado, luego procedemos a agregarle una clase
    //tambien le agregamos un onClicl a nuestro componentes para llamar a su respetiva funcion
    return (
        <li> 

            
            <span  className={`completa ${props.estado && `completad`}` } onClick={props.completado}>✔</span>
            <p className={` ${props.estado && `completada`}` }>{props.texto}</p>
            <span className={"quitar"}  onClick={props.eliminarTarea}>❌</span>
        </li>
        
    )
}

export {Tarea}