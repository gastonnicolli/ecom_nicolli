import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cereal from '../../Images/Cereal.png';

const Item = ({id, name, description, stock}) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>
                        Component Item
                    </Card.Title>
                    <Card.Img variant="top" src={ Cereal } alt="Avatar"/>
                    <Card.Text><strong>ID: </strong>{id}</Card.Text>
                    <Card.Text><strong>Name: </strong>{name}</Card.Text>
                    <Card.Text><strong>Stock: </strong>{stock}</Card.Text>
                    <hr/>
                    <div>
                        <Button variant="primary"  >+ Information</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item