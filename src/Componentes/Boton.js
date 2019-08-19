import React, { Component } from 'react';

class Boton extends Component {
  render(){
    return(
      //BOTON ENCAPSULADO
      <div className="Boton">
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
      </div>
    );
  }


}

export default Boton;
