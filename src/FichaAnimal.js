
import React from 'react';

class FichaAnimal extends React.Component {

    render() {
        return (
            <div class="container">
                <div class="card-group">
                    <div class="card">
                        <img src={this.props.animalFicha.picture} class="card-img-top" alt="Fafi" />
                        <div class="card-body">
                            <h1 class="card-title">{this.props.animalFicha.name}</h1>
                            <h4 class="card-text">{this.props.animalFicha.description}</h4>
                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#fafi">+
                            Info</button>
                            <h6 class="card-text"><small class="text-muted">{this.props.animalFicha.barrio}</small></h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FichaAnimal;