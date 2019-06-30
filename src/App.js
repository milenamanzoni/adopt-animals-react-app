import React from 'react';
import './App.css';
import Header from './Header';
import CarouselHome from './CarouselHome';
import 'bootstrap/dist/css/bootstrap.min.css';
import FichaAnimal from './FichaAnimal';
import Filtro from './Filtro';
import Registro from './Registro';
import Listado from './Listado';



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
  currentSection() {
    if (this.state.section === 1) {
      return <CarouselHome />;
    }
    if (this.state.section === 2) {
      return <Listado />;
    }
    if (this.state.section === 3) {
      return <Registro />;
    }
    if (this.state.section === 4) {
      return <FichaAnimal />;
    };

    render() {
      return (
        <div>
          <Header />
          <header>
            <button onClick={this.goToListado}>Listado</button>
            <button onClick={this.goToRegistro}>Registro</button>
            <button onClick={this.toggleFichaAnimal}>FichaAnimal</button>
          </header>




        </div>
      );
    }
  }





  export default App;
