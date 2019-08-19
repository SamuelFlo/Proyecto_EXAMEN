import React, { Component } from 'react';

import { nutri } from '../nutri.json';
import AgrNut from './AgrNut';

class Nutricion extends Component {
  //CARTA
  constructor(){
    super();
    this.state = {
      nutri
    }
    this.handleAddNutr=this.handleAddNutr.bind(this);
  }
  handleAddNutr(nutr) {
    //local storage
    var datosJson= JSON.stringify(this.state.nutri);
    localStorage.setItem('datosJson',datosJson);
    this.setState({
      nutri: [...this.state.nutri, nutr]
    })
  }
  BorrarDatos(index) {
    this.setState({
      nutri: this.state.nutri.filter((e, i) => {
        return i !== index
      })
    });
  }
    render(){
      const nut=this.state.nutri.map((nutri,i)=>{
        return(
          <div className="col-md-4">
            <div className="card mt-4">
              <div className="card-header">
                <h3>{nutri.Categoria}</h3>
              </div>
              <div className="card-body">
                <p>Alimento: {nutri.Alimento}</p>
                <p>Calorias: {nutri.Calorias}</p>
                <p>Proteinas: {nutri.Proteinas}</p>
                <span className="badge badge-pill badge-danger ml-2">
                    Grasa: {nutri.Grasas}
                </span>
              </div>
              <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.BorrarDatos.bind(this, i)}>
                Borrar
              </button>
            </div>
            </div>

          </div>
        )
      })
    return (
      <div className="Nutricion">
        <div className="container">
          <div className="row mt-4">
          <AgrNut onAddNutr={this.handleAddNutr}></AgrNut>
            { nut }
          </div>
        </div>

      </div>

    );
  }
}

export default Nutricion;
