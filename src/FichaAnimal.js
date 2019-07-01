
import React from 'react';

import Button from 'react-bootstrap/Button'
import DetalleAnimal from './DetalleAnimal';



class FichaAnimal extends React.Component {
    constructor(props){
        super(props);
        this.goToAnimalsDetail = this.goToAnimalsDetail.bind(this);
        
    }

    goToAnimalsDetail(){
        this.props.volverAAnimal(this.props.animalFicha);
    }


    render() {
        return (
            <div className="container">
                <div className="card-group">
                    <div className="card">
                        <img src={this.props.animalFicha.picture} className="card-img-top" alt="Fafi" />
                        <div className="card-body">
                            <h1 className="card-title">{this.props.animalFicha.name}</h1>
                            <h4 className="card-text">{this.props.animalFicha.description}</h4>
                            <button type="button" onClick={this.goToAnimalsDetail} className="btn btn-success" data-toggle="modal" data-target="#fafi">+
                            Info</button>          
                            
                            <h6 className="card-text"><small className="text-muted">{this.props.animalFicha.barrio}</small></h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FichaAnimal;
