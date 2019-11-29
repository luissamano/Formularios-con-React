import React, { Component } from 'react';

class NuevaCita extends Component {
    state = { 
        totalApagar: 50,
        cita: {
            mascota: "",
            propietario: "",
            fecha: "",
            hora: "",
            sintomas: ""
        }
     }

     handleChange = e => {
        this.setState({
            cita:{
                ...this.state.cita,
                [e.target.name]: e.target.value
            }
        })
     }

    render() {
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 
                        className="card-title text-center mb-5"
                    >Llena el formulario</h2>

                    <form>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Mascota
                            </label>

                            <div className="col-sm-8 col-lg-10">
                                <input
                                    id="mascota"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre de macosta"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Dueno
                            </label>

                            <div className="col-sm-8 col-lg-10">
                                <input
                                    id="propietario"
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del Dueno"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    id="fecha"
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                    id="hora"
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Sintomas
                            </label>

                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    id="sintomas"
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Descirbe los sistomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                ></textarea>
                            </div>
                        </div>

                        <input
                            type="submit"
                            className="py-3 mt-2 btn btn-success btn-block"
                            value="Agregar nueva cita"
                        />

                    </form>
                </div>
            </div>
        );
    }
}

export default NuevaCita;