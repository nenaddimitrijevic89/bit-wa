import React from 'react';
import './Users.css';

const User = props => {
    const dob = new Date(props.dob);
    const y = dob.getFullYear();
    const m = dob.getMonth();
    const d = dob.getDate();
    return (
        <div className="users__user">
            <div className="users__user_img">
                <img className="users__user_img_radius" src={props.img}></img>
            </div>
            <div className="users__user_info">
                <p>{`name: ${props.name}`}</p>
                <p>{`email: ${props.email}`}</p>
                <p>{`date of birth: ${d}-${m}-${y}.`}</p>
            </div>
        </div>
    )
}

export { User };