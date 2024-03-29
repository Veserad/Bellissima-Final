import React from "react";
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

const Home = (props) => {
    return (
        <div className="home">
            <Carousel>
                <Carousel.Item>
                    <img src='./img/index/banner1.png' height='100%' width='100%' alt='sale'/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='./img/index/banner2.png' height='100%' width='100%' alt="70off"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img src='./img/index/banner3.png' height='100%' width='100%' alt="tarjetas"/>
                    <Carousel.Caption className="tarjeta">
                        <h3>¡Aceptamos todas las tarjetas!</h3>
                        <p>
                            Promociones exclusivas y hasta 12 cuotas sin interés
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
}
export default Home;