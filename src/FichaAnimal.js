
import React from 'react';

class FichaAnimal extends React.Component {

    render() {
        return (
            <div class="container">
                <div class="card-group">
                    <div class="card">
                        <img src="https://i.ibb.co/kJCkwTY/perro-1.jpg" class="card-img-top" alt="Fafi" />
                        <div class="card-body">
                            <h1 class="card-title">Fafi</h1>
                            <h4 class="card-text">Macho, 2 años, pelaje rubio</h4>
                            <button type="button" class="btn btn-success" data-toggle="modal" data-target="#fafi">+
                            Info</button>
                            <h6 class="card-text"><small class="text-muted">Centro, Montevideo</small></h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FichaAnimal;