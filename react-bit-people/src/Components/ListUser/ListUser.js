import React from 'react';
import './ListUser.css';
import { hideEmail } from '../../Functions/functions';
import { Col } from 'react-bootstrap';

const ListUser = ({ dob, img, name, email, last, gender }) => {
    const dateOfBirth = new Date(dob);
    const y = dateOfBirth.getFullYear();
    const m = dateOfBirth.getMonth() + 1;
    const d = dateOfBirth.getDate();
    return (
        <Col className={`${gender === "female" ? 'female' : ''} users__user`} lg={12}>
            <div className="users__user_img">
                <img className="users__user_img_radius" src={img}></img>
            </div>
            <div className="users__user_info">
                <p><span> {name} {last}</span></p>
                <p><i className="fa fa-envelope"></i> email:<span> {hideEmail(email)}</span></p>
                <p><i className="fa fa-birthday-cake"></i> date of birth:<span> {`${d}-${m}-${y}`}</span></p>
            </div>
        </Col>
    )
}

export { ListUser };