import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Giphy = ({ src }) => {
    return (
        <Col lg={4}>
            <Card>
                <img className="giphy__img" src={src}>
                </img>
            </Card>
        </Col>
    )
}

export { Giphy };
