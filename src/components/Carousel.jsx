import Carousel from 'react-bootstrap/Carousel';

import { Image } from 'react-bootstrap';

import slide1 from '../assets/slide-1.png';
import slide2 from '../assets/slide-2.png';
import slide3 from '../assets/slide-3.png';
import slide4 from '../assets/slide-4.jpg';


const estiloImg = {
  height: "calc(100% - 20px)",
  objectFit: "cover"
}
const estiloCaption = {
  backgroundColor: "rgba(0, 0, 0, 0.6)"
}
function CarouselInicio() {
  return (
    <Carousel style={{ height: "calc(100vh - 100px)" }} >
      <Carousel.Item
        className=" w-100 h-100">
        <Image
          className=" w-100 h-100 "
          src={slide1}
          alt="Imagen del local por dentro"
          style={estiloImg}></Image>
        <Carousel.Caption style={estiloCaption}>

          <h3>TechWorks Solutions</h3>
          <p>"Innovación para cada movimiento, tecnología para cada necesidad"</p>

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        className="w-100 h-100">
        <Image
          className="w-100 h-100 "
          src={slide2}
          alt="Imagen de stock de productos"
          style={estiloImg}></Image>
        <Carousel.Caption style={estiloCaption}>

          <h3>Quienes Somos?</h3>
          <p>TechWorks Solutions es una empresa dedicada a la fabricación, distribución y comercialización de productos tecnológicos de alta calidad. Especializados en equipos de cómputo, periféricos y componentes electrónicos, nuestra misión es facilitar el acceso a herramientas tecnológicas confiables que potencien la productividad y mejoren la calidad de vida de nuestros clientes.</p>
          <p>Nació en 2011 como una respuesta directa a la creciente demanda de productos tecnológicos accesibles y confiables. En ese momento, el mercado tecnológico estaba dominado por grandes corporaciones que priorizaban la producción masiva sobre las necesidades individuales de los consumidores. Esto inspiró a un grupo de ingenieros y diseñadores visionarios a fundar una empresa que combinara innovación, personalización y calidad en cada producto.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        className="w-100 h-100">
        <Image
          className="w-100 h-100 "
          src={slide3}
          alt="Imagen por fuera de local"
          style={estiloImg}></Image>
        <Carousel.Caption style={estiloCaption}>

          <h3>Nuestra Misión</h3>
          <p>Ser el puente entre la tecnología y las personas, entregando productos que respondan a las demandas del mundo moderno con un enfoque sostenible y humano.</p>
          <h3>Nuestra Visión</h3>
          <p>Liderar el mercado tecnológico como una empresa que se adapta al futuro, fomentando la creatividad y el desarrollo a través de soluciones tecnológicas accesibles para todos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item
        className=" w-100 h-100">
        <a href="https://www.youtube.com/watch?v=gScfbSsuJ5c&pp=ygULY29tcHJhZ2FtZXI%3D"
        target='_blank'>
        <Image
          className=" w-100 h-100 "
          src={slide4}
          alt="Imagen de una Motherboard"
          style={estiloImg}></Image>

          </a>

        <Carousel.Caption style={estiloCaption}>

          <h3>Conocé el nuevo Asus ROG Strix Z890-E Gaming Wifi</h3>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselInicio;
