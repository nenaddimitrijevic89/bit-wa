import React from 'react';
import { hideEmail } from '../../Functions/functions';
import './GridUser.css';
import { Card, Col } from 'react-bootstrap';

const GridUser = ({ dob, img, name, email, gender }) => {
    const dateOfBirth = new Date(dob);
    const y = dateOfBirth.getFullYear();
    const m = dateOfBirth.getMonth() + 1;
    const d = dateOfBirth.getDate();

    return (
        <Col className="griduser" lg={4}>
            <Card style={{ width: '' }} className="a">
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body className={`${gender === "female" ? 'female' : ''}`}>
                    <Card.Title><h1 className="gridUsers__user_name">{name}</h1></Card.Title>
                    <Card.Title>{hideEmail(email)}</Card.Title>
                    <Card.Title>date of birth:<span> {`${d}-${m}-${y}`}</span></Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export { GridUser };