import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navegador from './Componentes/Navegador';
import Nutricion from './Componentes/Nutricion';
import AgrNut from './Componentes/AgrNut';
import Display from './Componentes/Display';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Display/>
        <Navegador/>
        <Nutricion/>


        <nav>

        </nav>
      </div>
    );
  }
}

export default App;
