import React from 'react';

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <nav className="navbar-home flex-row-reverse">
          <div className="container-fluid navegador" id="header-container">
            <a className="navbar-logo" href="Home.html" id="logo"><img src="https://i.ibb.co/QQmKXZp/LOGO.png" alt="PETadoption" /> </a>
            <a className="navbar-brand" href="catalogo.html">ADOPTA </a>
            <a className="navbar-brand" href="darenadopcion.html">DAR EN ADOPCION </a>
            <button onClick={this.props.goToFichaAnimal} className="navbar-brand" href="#"  >SOBRE NOSOTROS </button>
          </div>
        </nav>
      </header>
    );
  }
}


export default Header;
