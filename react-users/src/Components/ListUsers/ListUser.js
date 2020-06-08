import React from 'react';
import './ListUsers.css';

const ListUser = props => {
    const dob = new Date(props.dob);
    const y = dob.getFullYear();
    const m = dob.getMonth()+1;
    const d = dob.getDate();
    return (
        <div className="users__user">
            <div className="users__user_img">
                <img className="users__user_img_radius" src={props.img}></img>
            </div>
            <div className="users__user_info">
                <p>name:<span> {props.name}</span></p>
                <p>email:<span> {props.email}</span></p>
                <p>date of birth:<span> {`${d}-${m}-${y}`}</span></p>
            </div>
        </div>
    )
}

export { ListUser };