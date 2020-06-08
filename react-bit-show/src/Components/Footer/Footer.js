import React from 'react';
import './Footer.css';
import { Navbar, Container } from 'react-bootstrap';



const Footer = () => {
    return (
        <Container fluid className="footer">
            <Navbar variant="dark" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className="text-center footer__title" href="#home">&copy; 2020 BIT</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}

export { Footer };