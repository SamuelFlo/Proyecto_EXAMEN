import React, { Component } from 'react';

import Boton from './Boton';

class AgrNut extends Component {
  constructor () {
    super();
    this.state = {
      Categoria: '',
      Alimento: '',
      Calorias: '',
      Proteinas: '',
      Grasas: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddNutr(this.state);
    this.setState({
      Categoria: '',
      Alimento: '',
      Calorias: '',
      Proteinas: '',
      Grasas:''
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      //AGREGAR CARDS CON SUS RESPECTIVOS INPUTS
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="Categoria"
              className="form-control"
              value={this.state.Categoria}
              onChange={this.handleInputChange}
              placeholder="Categoria"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Alimento"
              className="form-control"
              value={this.state.Alimento}
              onChange={this.handleInputChange}
              placeholder="Alimento"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Calorias"
              className="form-control"
              value={this.state.Calorias}
              onChange={this.handleInputChange}
              placeholder="Calorias"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Proteinas"
              className="form-control"
              value={this.state.Proteinas}
              onChange={this.handleInputChange}
              placeholder="Proteinas"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="Grasas"
              className="form-control"
              value={this.state.Grasas}
              onChange={this.handleInputChange}
              placeholder="Grasas"
              />
          </div>
          <Boton/>
        </form>
      </div>
    )
  }

}

export default AgrNut;
