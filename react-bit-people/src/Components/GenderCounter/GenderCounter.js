import React from 'react';
import { Col } from 'react-bootstrap';
import './GenderCounter.css'




const GenderCounter = ({ users }) => {

    let male = 0;
    let female = 0;
    console.log(users);


    users.forEach(user => {
        if (user.gender === "male") {
            male++
        } else {
            female++
        }
    });
    return (
        <Col className="gender__counter">
            <p>Male: {male} Female: {female}</p>
        </Col>
    )
}

export { GenderCounter };