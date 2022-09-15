import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Pelicula(props) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title>{props.titulo}</Card.Title>
                <Card.Text>
                   {props.descripcion}
                </Card.Text>
                <Button variant="primary">Mas detalles...</Button>
            </Card.Body>
        </Card>

       /* <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../img/23.jpg" />
            <Card.Body>
                <Card.Title>Destiny 2</Card.Title>
                <Card.Text>
                    Espectro creados por El Viajero para encontrar guardianes y llevarlos a La Torre, está explorando entre los restos de la Antigua Rusia hasta que encuentra y resucita al Guardián, que había sido asesinado en una batalla antigua.
                </Card.Text>
                <Button variant="primary">Mas detalles...</Button>
            </Card.Body>
        </Card>*/
    );
}

export default Pelicula;