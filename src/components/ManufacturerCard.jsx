import Card from 'react-bootstrap/Card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faHouse } from '@fortawesome/free-solid-svg-icons';

export default function ManufacturerCard({nombre, direccion, telefono, img}) {
    const pathImg = `/${img}`
    const imgStyles = {
      width: 'calc(100% - 40px)', 
      height: '150px', 
      margin: '20px'
       };
       
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pathImg} style={imgStyles}/>
        <Card.Body>
          <Card.Title style={{fontWeight: "bold"}}>{nombre}</Card.Title>
          <Card.Text>
            <p><FontAwesomeIcon icon={faHouse} /> {direccion}</p>
            <p><FontAwesomeIcon icon={faPhone} /> {telefono}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
}
