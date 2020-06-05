import React from 'react';
import data from '../../Data/data.json';
import { User } from './User';
import './Users.css'
import { GridUser } from '../GridUsers/GridUser';

const Users = () => {
    return (
        <div className="users">
            {data.results.map((user, i) =>
                <GridUser
                    key={i}
                    img={user.picture.large}
                    // name={user.name.first}
                    email={user.email}
                    dob={user.dob.date}
                />
            )}
        </div>
    )

}

export { Users };