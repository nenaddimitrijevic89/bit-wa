import React from 'react';
import './Home.css';
import { Header } from '../Header/Header';
import { Container } from 'react-materialize';

const Home = () => {
    return (
        <div>
            <Header />
            <Container>
                <h2 className="home__title">New Post</h2>
            </Container>
        </div>
    )
}

export { Home };