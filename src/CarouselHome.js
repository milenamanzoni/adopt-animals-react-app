import React from 'react';

class CarouselHome extends React.Component {

    render() {
        return (
            <div className="bd-example">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://i.ibb.co/9Vy4jZv/header-1.jpg" className="d-block w-100" alt="slide-adoptme" />
                            <div className="carousel-caption d-none d-md-block">
                                <a className="bbtn btn-success btn-lg btn-block" href="catalogo.html"
                                    role="button">Adoptame!</a>
                                <p>Conoce a todos los animales que estan buscando un hogar</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ibb.co/B2h18Pt/header-2.jpg" className="d-block w-100" alt="slide-darenadopcion" />
                            <div className="carousel-caption d-none d-md-block">
                                <a className="bbtn btn-success btn-lg btn-block" href="darenadopcion.html" role="button">Dar en
                            adopcion</a>
                                <p>Agrega un animal a nuestra lista de adopcion</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default CarouselHome;