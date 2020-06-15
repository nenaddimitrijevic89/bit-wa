import React from 'react';
import { Header } from '../Header/Header';
import { Container } from 'react-materialize';
import './About.css';
import { Foot } from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <Header />
            <Container>
                <h2 className="about__title">About</h2>
            </Container>
            <Foot/>
        </div>
    )
}

export { About };