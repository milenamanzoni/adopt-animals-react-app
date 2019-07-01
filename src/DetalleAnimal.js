import React from 'react';
import FichaAnimal from './FichaAnimal';
import Button from 'react-bootstrap/Button'

class DetalleAnimal extends React.Component {
        constructor(props){
                super(props);
               
                this.state = {
                        animal: this.props.animal.currentAnimal
                      }

            }
        render() {
                return (
                        <div>
                        <h1>Tipo: {this.state.animal.tipo} </h1>
                        <h1>Raza: {this.state.animal.raza} </h1>
                        <h1>Edad: {this.state.animal.edad} </h1>
                        </div>
                );
            }
        }
export default DetalleAnimal