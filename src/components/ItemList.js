import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import figuritaMbappe from '../assets/figuritaMbappe.png';
import figuritaCR7 from '../assets/figuritaCR7.png';
import figuritaDePaul from '../assets/figuritaDePaul.png';

function ItemList() {
    return (
        <div className="d-flex justify-content-front">
            <Card style={{ width: '8rem' }}>
                <Card.Img variant="top" src={figuritaMbappe} />
                <Card.Body>
                    <Card.Title>Mbappe</Card.Title>
                    <Card.Text>Altura: 1.78m Posicion: Delantero</Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '8rem' }}>
                <Card.Img variant="top" src={figuritaCR7} />
                <Card.Body>
                    <Card.Title>Cristiano Ronaldo</Card.Title>
                    <Card.Text>Altura: 1.87m Posicion: Delantero</Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '8rem' }}>
                <Card.Img variant="top" src={figuritaDePaul} />
                <Card.Body>
                    <Card.Title>De Paul</Card.Title>
                    <Card.Text>Altura: 1.80m Posicion: Mediocampista</Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ItemList;