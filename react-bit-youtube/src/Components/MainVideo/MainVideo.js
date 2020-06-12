import React from 'react';
import { Col, Card, } from 'react-bootstrap';


const MainVideo = ({ filterVideos, image, name, id }) => {


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


export { MainVideo }