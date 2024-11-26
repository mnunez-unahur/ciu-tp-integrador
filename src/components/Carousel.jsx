import Carousel from 'react-bootstrap/Carousel';

import { Image } from 'react-bootstrap';

import slide1 from '../assets/slide-1.png';
import slide2 from '../assets/slide-2.png';
import slide3 from '../assets/slide-3.png';

const estiloImg = {
  height: "calc(100% - 20px)",
  objectFit: "cover"
}

function CarouselInicio() {
  return (
    <Carousel style={{ height: "calc(100% - 20px)" }} >
      <Carousel.Item
        className="d-block w-100 h-100">
        <Image
          className="d-block w-100 h-100 "
          src={slide1}
          alt="First slide"
          style={estiloImg}></Image>
        <Carousel.Caption>

          <h3>TechWorks Solutions</h3>
          <p>"Innovación para cada movimiento, tecnología para cada necesidad"</p>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        className="d-block w-100 h-100">
        <Image
          className="d-block w-100 h-100 "
          src={slide2}
          alt="First slide"
          style={estiloImg}></Image>
        <Carousel.Caption>

          <h3>TechWorks Solutions</h3>
          <p>"Innovación para cada movimiento, tecnología para cada necesidad"</p>

        </Carousel.Caption>
      </Carousel.Item>


      {/* <Carousel.Item
        className="d-block w-100 h-100">
        <Image
          className="d-block w-100 h-100 "
          src={slide2}
          alt="Firstslide"
          style={estiloImg} ></Image>
        <Carousel.Caption>

          <h3>Quienes Somos?</h3>
          <p>TechWorks Solutions es una empresa dedicada a la fabricación, distribución y comercialización de productos tecnológicos de alta calidad. Especializados en equipos de cómputo, periféricos y componentes electrónicos, nuestra misión es facilitar el acceso a herramientas tecnológicas confiables que potencien la productividad y mejoren la calidad de vida de nuestros clientes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 h-100 "
          src={slide3}
          alt="First slide"
          style={estiloImg}></Image>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default CarouselInicio;
