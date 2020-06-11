import React from 'react';
import './Footer.css';
import TimeAgo from 'timeago-react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ time }) => {
    return (
        <Container fluid className="footer" >
            <Container >
                <Row>
                    <Col className="footer__info" lg={9}> <h5 >&copy; 2020 Copyright BIT</h5></Col>
                    <Col lg={3} className="footer__time"><h5 >Last update: <TimeAgo
                        datetime={time} />
                    </h5></Col>

                </Row>

            </Container>
        </Container>
    )
}

export { Footer };