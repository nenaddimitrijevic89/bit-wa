import React from 'react';
import notFound from '../../Images/not_found.png';
import { Container, Row, Col } from 'react-bootstrap';


const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <img src={notFound}></img>
                </Col>
            </Row>
        </Container>

    )
}

export { NotFound };