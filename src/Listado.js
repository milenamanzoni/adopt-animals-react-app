import React from 'react';
import FichaAnimal from './FichaAnimal';

import listadoAnimales from './listaAnimales';

class Listado extends React.Component {
  constructor(props) {
    super(props);
    this.goToAnimalInfo = this.goToAnimalInfo.bind(this);
    this.state = {
      listaAnimales: listadoAnimales
    }

    
  }
  goToAnimalInfo (animal){
    this.props.goToExtrainfo(animal);
  }
  render() {
    return (
      <div>
        {this.state.listaAnimales.map(currentAnimal => <FichaAnimal animalFicha={currentAnimal} key={currentAnimal.id} volverAAnimal={this.goToAnimalInfo}/>)}

      </div>
    );
  }
}


export default Listado;
