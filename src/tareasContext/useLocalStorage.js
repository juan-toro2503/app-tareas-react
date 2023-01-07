import React from "react";

//creamos nuestro propio hook para poder reutilizar nuestro codigo y funcionalidades

//recibimos dos parametros enviados desde el estado

function useLocalStorage(itemName,initialValue){
    const [error,setError]=React.useState(false)
    const [loading,setLoading]=React.useState(true)
    //utilizamos estos parametros en los campos del estado
    const [item,setItem]=React.useState(initialValue)
    //hacemos uso de los efectos de react el cual nos indica cuando ya fueron renderizados nuestros componentes 
    React.useEffect(() => {
      setTimeout(() => {
        try{
          //creamos una constante con el llamado a localStorage
          const localStorageTareas=localStorage.getItem(itemName)
          //creamos una variable la cual mas adelante contendra el valor de localStorage
          let listaTareas;
          //con esta condicion veficamos si hay o no un valor de localStorage
          if(!localStorageTareas){
            // si no lo hay entonces crea un item y se le ingresa el nombre y valor recibido por nuestro hook
            localStorage.setItem(itemName,JSON.stringify(initialValue))
            listaTareas=[]
        
          }else{
            //y si lo hay entonces nos trae lo que hay en el localStorage y lo almacena en la variable antes mencionada
            listaTareas= JSON.parse(localStorageTareas)
          }
          //ahora cambiamos el estado de nuestra lista y de loading
          setItem(listaTareas)
          setLoading(false)
        }catch(e){
          setError(e)
        }
  
      
  
      },4000)
    }
  
    )
  
  
    
  //creamos una funcion la cual recibira una lista nueva siempre que haya un cambio y la almacenara en el localStorage
    const guardarTareas=(newTareas)=>{
      try{
        let stringifyTareas=JSON.stringify(newTareas)
        localStorage.setItem(itemName,stringifyTareas)
        setItem(newTareas)
      }catch(e){
        setError(e)
      }
    }
    //ahora retornamos nuestros estados para poder ser utilizados en nuestra logica
    return{
      item,guardarTareas,loading,error
    }
  
  }

  export {useLocalStorage}