import React from 'react';
import { Container, Navbar, NavItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Container className="header">
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="#">BIT BLOG</a>}
                centerChildren
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}

                options={{
                    draggable: true,
                    edge: 'right',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
                <Link to='/'> <NavItem href="">
                    Home
                </NavItem> </Link>
                <Link to='/Posts'> <NavItem href="">
                    Posts
                </NavItem> </Link>
                <Link to='/Authors'> <NavItem href="">
                    Authors
                </NavItem> </Link>
                <Link to='/About'> <NavItem href="">
                    About
                </NavItem> </Link>
            </Navbar>
        </Container>
    );
}

export { Header };