import React from 'react';


const GridUser = props => {
    const dob = new Date(props.dob);
    const y = dob.getFullYear();
    const m = dob.getMonth();
    const d = dob.getDate();
    return (
        <div>
            <div>
                <img src={props.img}></img>
            </div>
            <div>
                <p>{`email: ${props.email}`}</p>
                <p>{`date of birth: ${d}-${m}-${y}.`}</p>
            </div>
        </div>
    )
}

export { GridUser };