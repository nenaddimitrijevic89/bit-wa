import React from 'react';
import { Card, Col } from 'react-bootstrap';


const History = ({ image, name, filterVideos, id }) => {
    return (
        <Col lg={4}>
            <Card style={{ width: '18rem' }} onClick={() => filterVideos(id)}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { History };