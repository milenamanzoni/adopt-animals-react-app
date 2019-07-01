import React from 'react';
import './App.css';
import CarouselHome from './CarouselHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import FichaAnimal from './FichaAnimal';
// import Filtro from './Filtro';
import Registro from './Registro';
import Listado from './Listado';
import SobreNosotros from './SobreNosotros';
import DetalleAnimal from './DetalleAnimal';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 1,

    };
  }



  goToCarouselHome = () => {
    this.setState({
      section: 1
    });
  }
  goToListado = () => {
    this.setState({
      section: 2
    });
  }
  goToRegistro = () => {
    this.setState({
      section: 3
    });
  }
  goToFichaAnimal = () => {
    this.setState({
      section: 4
    });
  }
  goToSobreNosotros = () => {
    this.setState({
      section: 5
    });
  }

  goToExtrainfo = (animal) => {
    this.saveCurrentAnimal(animal)
    this.setState({
      section: 6
    });
   
  }

  saveCurrentAnimal(animal){
    this.setState({
      currentAnimal : animal
    });
  }

  currentSection() {
    if (this.state.section === 1) {
      return <CarouselHome />;
    }
    if (this.state.section === 2) {
      return <Listado  goToExtrainfo={this.goToExtrainfo}/>;
    }
    if (this.state.section === 3) {
      return <Registro />;
    }
    if (this.state.section === 4) {
      return <FichaAnimal />;
    };

    if (this.state.section === 5) {
      return <SobreNosotros />;
    };
   
      if (this.state.section === 6) {
      return <DetalleAnimal animal={this.state.currentAnimal}/>;
    };
  }







render() {
  return (
    <div>
      <header className="header">
        <nav className="navbar-home flex-row-reverse">
          <div className="container-fluid navegador" id="header-container">
            <a onClick={this.goToCarouselHome} className="navbar-logo" href="#" id="logo"><img src="https://i.ibb.co/QQmKXZp/LOGO.png" alt="PETadoption" /> </a>
            <a onClick={this.goToListado} className="navbar-brand" href="#" >ADOPTA </a>
            <a onClick={this.goToRegistro} className="navbar-brand" href="#">DAR EN ADOPCION </a>
            <a onClick={this.goToSobreNosotros} className="navbar-brand" href="#">SOBRE NOSOTROS </a>
          </div>
        </nav>
      </header>

      {this.currentSection()}
    </div>
  );
}
  }





export default App;
