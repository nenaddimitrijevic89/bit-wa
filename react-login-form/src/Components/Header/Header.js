import React from 'react';
import './Header.css';
import { Container, Col, Row } from 'react-bootstrap';


const Header = () => {
    return (
            <Container className="header">
                <Row>
                    <Col lg={{ span: 2, offset: 5 }} md={{ span: 6, offset: 3 }} sm={{ span: 4, offset: 3 }}>
                        <h2 className="header__title">Bit Login Form</h2>
                    </Col>
                </Row>
            </Container>
    )
}

export {Header}