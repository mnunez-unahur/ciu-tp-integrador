import Card from 'react-bootstrap/Card';

export default function ManufacturerCard({nombre, direccion, telefono, img}) {
    const pathImg = `/${img}`

    return (
      <Card style={{ width: '18rem', margin: "auto" }}>
        <Card.Img variant="top" src={pathImg} />
        <Card.Body>
          <Card.Title style={{fontWeight: "bold"}}>{nombre}</Card.Title>
          <Card.Text>
            <p>{direccion}</p>
            <p>{telefono}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
}
