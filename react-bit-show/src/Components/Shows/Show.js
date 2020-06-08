import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Shows.css';

const Show = props => {
    const { name, avatar } = props;
    return (
        <Col className="shows__show" lg={4}>
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={avatar} alt={name} />
                <Card.Body>
                    <Card.Title className="shows__show_name">{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { Show };