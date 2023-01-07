import React from "react";
import { TareaProvider } from "../tareasContext";
import { AppUI } from "./appUI";
import '../css/style.css';
/* import './App.css'; */

/* const listaTareas=[{texto:"Comprar tenis",estado:false },{texto:"Comprar carro",estado:true },{texto:"Comprar ropa",estado:true }] */

//custom hooks son funciones de reutilizar la logica de estado en nuestras apps, sirve para la comunicacion entre componentes



function App() {
  return (
    <TareaProvider>
      <AppUI></AppUI>
    </TareaProvider>


    
    
  );
}

export default App;
