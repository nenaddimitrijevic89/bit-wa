
import React from 'react';
import { hideEmail } from '../../Functions/functions';
import './GridUser.css';

const GridUser = ({ dob, img, name, email }) => {
    const dateOfBirth = new Date(dob);
    const y = dateOfBirth.getFullYear();
    const m = dateOfBirth.getMonth() + 1;
    const d = dateOfBirth.getDate();

    return (
        <div className="gridUsers__user">
            <div>
                <img className="gridUsers__user_img" src={img}></img>
                <h2 className="gridUsers__user_name">{name}</h2>
            </div>
            <div className="gridUsers__users_info">
                <p>email:<span> {hideEmail(email)}</span></p>
                <p>date of birth:<span> {`${d}-${m}-${y}`}</span></p>
            </div>
        </div>
    )
}

export { GridUser };