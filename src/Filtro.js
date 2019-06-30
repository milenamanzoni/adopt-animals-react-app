import React from 'react';

class Filtro extends React.Component {

    render() {
        return (
            <section classname="buscador">
            <div classname="container-fluid b-cat">
                <div classname="row">
                    <div classname="col">
                        <select classname="form-control">
                            <option>Perro</option>
                            <option>Gato</option>
                            <option>Otros</option>
                        </select>
                    </div>
                    <div classname="col">
                        <input type="text" placeholder="Ingrese caracteristicas" name="Caracterisicas"
                            classname="form-control"/>
                    </div>
                    <div classname="col">
                        <select classname="form-control">
                            <option>Raza</option>
                            <option>Sexo</option>
                            <option>Edad</option>
                            <option>Barrio</option>
                        </select>
                    </div>
                    <div classname="col">
                        <button type="button" classname="btn btn-success">Buscar</button>
                    </div>
                </div>
            </div>
        </section>

        );
    }
}

export default Filtro;