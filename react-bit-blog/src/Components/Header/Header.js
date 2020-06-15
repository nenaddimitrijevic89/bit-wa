import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon, Container } from 'react-materialize';

const Header = () => {
    return (
        <Container className="nav">
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="#">Logo</a>}
                id="mobile-nav"
                menuIcon={<Icon>Bit Blog</Icon>}
                options={{
                    draggable: true,
                    edge: 'center',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <Link to='/'><NavItem>Home</NavItem></Link>
                <Link to='/Posts'><NavItem>Posts</NavItem></Link>
                <Link to='/Authors'><NavItem>Authors</NavItem></Link>
                <Link to='/About'><NavItem>About</NavItem></Link>
            </Navbar>
        </Container>
    )
}

export { Header };