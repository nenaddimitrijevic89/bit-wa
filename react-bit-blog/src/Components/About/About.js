import React from 'react';
import { Header } from '../Header/Header';
import { Container } from 'react-materialize';
import './About.css';

const About = () => {
    return (
        <div>
            <Header />
            <Container>
                <h2 className="about__title">About</h2>
            </Container>
        </div>
    )
}

export { About };