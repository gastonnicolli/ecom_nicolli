import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cereal from '../../Images/Cereal.png';
import { Link } from 'react-router-dom';

const Item = ({id, name, stock, imageUrl}) => {
    return (
        <>
            {/* style={{ width: '20rem', margin:'10px' }} */}
            <Card >
                <Card.Body>
                    <Card.Title>
                        Component Item
                    </Card.Title>
                    <Card.Img className="card-img-top" variant="top" src={ imageUrl } alt="Avatar"/>
                    <Card.Text><strong>ID: </strong>{id}</Card.Text>
                    <Card.Text><strong>Name: </strong>{name}</Card.Text>
                    <Card.Text><strong>Stock: </strong>{stock}</Card.Text>
                    <hr/>
                    <div>
                    <Link to={`item/${id}`}>
                        <Button variant="primary"  >+ Information</Button>
                    </Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item