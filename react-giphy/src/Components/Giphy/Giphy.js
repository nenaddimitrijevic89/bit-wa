import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Giphy.css';

class Giphy extends React.Component {

    render() {
        return (
            <Col lg={4}>
                <Card className="giphy">
                    <img className="giphy__img" src={this.props.src} />
                    <button className="giphy__button" onClick={() => this.props.removeGiphy(this.props.id)} >x</button>
                </Card>
            </Col>
        )
    }
}


export { Giphy };
