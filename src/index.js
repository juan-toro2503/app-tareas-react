import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  //podemos crear las propiedades para enviarselas a nuestro componente <App saludo="holaaa" />
  //o las podemos crear dentro de nuestro componente -><App saludo="holaaa" > <h1>holaaa</h1> </App>
    <App />
 
  
);


