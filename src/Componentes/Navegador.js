import React, { Component } from 'react';


import Nutricion from './Nutricion';

class Navegador extends Component {
  //ENCAPSULADO EL NAVEGADOR
  render(){
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">Agregar y Eliminar Nutrition Facts
        </a>
      </nav>
    );
  }
}

export default Navegador;
