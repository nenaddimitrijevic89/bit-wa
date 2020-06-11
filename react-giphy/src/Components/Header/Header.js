
import React from 'react';
import './Header.css';
import { Container, Col, Row } from 'react-bootstrap';


const Header = () => {
    return (
        <Row className="header">
            <Col>
                <h2 className="header__title">Giphy App</h2>
            </Col>
        </Row>
    )
}

export { Header };