import React, { Component } from "react";
import Header from "./component/Header";
import NuevaCita from "./component/NuevaCita";
import ListaCitas from "./component/ListaCitas";
import "./bootstrap.min.css";

class App extends Component {
  state = {
    citas: []
  };

  // cuando la aplicacion carga
  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  // cuando eliminamos o agregamos una nueva citas
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  eliminarCita = id => {
    // copia del state
    const citasActuales = [...this.state.citas];

    // utilizar filter para sacar el elemento @id del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id);

    this.setState({
      citas
    });
  };

  crearNuevaCita = datos => {
    // copia el state actual
    const citas = [...this.state.citas, datos];

    // agregar el nuevo state
    this.setState({
      citas
    });
  };

  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-12 mx-auto">
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
