import React from "react";
import '../css/style.css';

function BotonAgregar({setOpenModal,openModal}){
    const estadoModal=()=>{

        //tambien podemos hacer esto para veficar el estado
        // setOpenModal(prevState=>!prevState) lo que hace es tomal el valor del estado y cambiarlo
        if(openModal){
            setOpenModal(false)
        }else{
            setOpenModal(true);
        }



    }
   


    return(
        <button className={`btn-agregar `}
        onClick={estadoModal}
        > <p className={ `abrirModal ${openModal && `cerrarModal`} `}>+</p> </button>
    )
}

export {BotonAgregar}