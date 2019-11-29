import React, { Component } from 'react';
import Header from './component/Header';
import NuevaCita from './component/NuevaCita';
import "./bootstrap.min.css";

class App extends Component {
  state = { }
  render () {
    return ( 
      <div className="container">
        <Header 
          titulo='Administrador Pacientes Veterinaria'
        />
        <div className="row">
          <div className="col-md-12 mx-auto">            
            <NuevaCita />
          </div>
        </div>
      </div>
    );
  };
}

export default App;
