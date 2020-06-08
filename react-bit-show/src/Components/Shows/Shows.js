import React, { Component } from 'react';
import { Show } from './Show';
// import './Shows.css';
import { Container, Row } from 'react-bootstrap';

class Shows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: []
        }
    }
    componentDidMount() {
        fetch('http://api.tvmaze.com/shows')
            .then(results => results.json())
            .then(data => {
                this.setState({ shows: data })
            })
    }
    render() {
        return (
            <Container>
                <Row>
                    {this.state.shows.sort((a, b) => a.rating.average > b.rating.average ? -1 : 1).map((show, i) => {
                        if (i < 50) {
                            return (
                                <Show
                                    key={show.id}
                                    name={show.name}
                                    avatar={show.image.medium} />
                            )
                        }
                    })}
                </Row>
            </Container>
        )
    }
}


export { Shows };