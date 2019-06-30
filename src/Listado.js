import React from 'react';
import FichaAnimal from './FichaAnimal';
import Modal from 'react-bootstrap/Modal';
import listadoAnimales from './listaAnimales';

class Listado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaAnimales: listadoAnimales
    }


  }

  render() {
    return (
      <div>
        {this.state.listaAnimales.map(currentAnimal => <FichaAnimal animalFicha={currentAnimal} />)}

      </div>
    );
  }
}


export default Listado;
