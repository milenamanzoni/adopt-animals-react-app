import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


class CarouselHome extends React.Component {

    render() {
        return (
            <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/9Vy4jZv/header-1.jpg"
              />
              <Carousel.Caption>
              <div className="carousel-caption d-none d-md-block">
                                <a className="bbtn btn-success btn-lg btn-block" href="catalogo.html"
                                    role="button">Adoptame!</a>
                                <p>Conoce a todos los animales que estan buscando un hogar</p>
                            </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ibb.co/B2h18Pt/header-2.jpg"
              />
          
              <Carousel.Caption>
              <div className="carousel-caption d-none d-md-block">
                                <a className="bbtn btn-success btn-lg btn-block" href="darenadopcion.html" role="button">Dar en
                            adopcion</a>
                                <p>Agrega un animal a nuestra lista de adopcion</p>
                            </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
    }
}

export default CarouselHome;