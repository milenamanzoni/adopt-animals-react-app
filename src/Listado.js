import React from 'react';
import FichaAnimal from './FichaAnimal';

import listadoAnimales from './listaAnimales';
import Filtro from './Filtro';

class Listado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaAnimales: listadoAnimales,
      descripcion: '',
    }
    this.goToAnimalInfo = this.goToAnimalInfo.bind(this);
  }
  goToAnimalInfo(animal) {
    this.props.goToExtrainfo(animal);
  }

  onChangeHandler(event) {
   
    this.setState({
      descripcion: event.target.value,
    })

  }


  render() {
    const list = this.state.listaAnimales
    .filter(animal => this.state.descripcion.toLowerCase() === '' || animal.description.toLowerCase().includes(this.state.descripcion.toLowerCase()))
    .map(currentAnimal => <FichaAnimal animalFicha={currentAnimal} key={currentAnimal.id} volverAAnimal={this.goToAnimalInfo} />)
    return (
      <div>


        <div >
        <h5>Buscar por descripcion:</h5>
        <input value={this.state.descripcion} type="text" onChange={this.onChangeHandler.bind(this)}/>
        </div>
      {list}

      </div>
    );
  }
}


export default Listado;
