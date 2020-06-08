import React from 'react';
import {hideEmail} from '../../functions/HideEmail';
import {isMale} from '../../functions/isMale';
import './GridUsers.css';

const GridUser = props => {
    const dob = new Date(props.dob);
    const y = dob.getFullYear();
    const m = dob.getMonth()+1;
    const d = dob.getDate();
    
    return (
        <div className="gridUsers__user">
            <div>
                <h2 className="gridUsers__user_gender">{isMale(props.gender)}</h2>
                <img className="gridUsers__user_img" src={props.img}></img>
                <h2 className="gridUsers__user_name">{props.name}</h2>
            </div>
            <div className="gridUsers__users_info">
                <p>email:<span> {hideEmail(props.email)}</span></p>
                <p>date of birth:<span> {`${d}-${m}-${y}`}</span></p>
            </div>
        </div>
    )
}

export { GridUser };