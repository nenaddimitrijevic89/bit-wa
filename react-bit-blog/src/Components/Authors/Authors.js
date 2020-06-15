import React from 'react';
import './Authors.css';
import { Header } from '../Header/Header';
import { Author } from '../Author/Author';
import { Container } from 'react-materialize';
import { Foot } from '../Footer/Footer';

class Authors extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data })
            })
    }
    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h2 className="authors__title">Authors</h2>
                    {this.state.users.map(user => 
                    <Author 
                    name={user.name} 
                    website={user.website} />)}
                </Container>
                <Foot/>
            </div>
        )
    }
}

export { Authors }