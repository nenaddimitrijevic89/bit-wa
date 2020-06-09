import React from 'react';
import './ListUser.css';
import { hideEmail } from '../../Functions/functions';
import { MdEmail } from 'react-icons/md';
import { FaBirthdayCake } from 'react-icons/fa';

const ListUser = ({ dob, img, name, email, last, gender }) => {
    if (gender === "female") {
        let female = "female"
    } else {
        female = ""
    }
    const dateOfBirth = new Date(dob);
    const y = dateOfBirth.getFullYear();
    const m = dateOfBirth.getMonth() + 1;
    const d = dateOfBirth.getDate();
    return (
        <div className="users__user">
            <div className="users__user_img">
                <img className="users__user_img_radius" src={img}></img>
            </div>
            <div className="users__user_info">
                <p><span> {name} {last}</span></p>
                <p><MdEmail /> email:<span> {hideEmail(email)}</span></p>
                <p><FaBirthdayCake /> date of birth:<span> {`${d}-${m}-${y}`}</span></p>
            </div>
        </div>
    )
}

export { ListUser };