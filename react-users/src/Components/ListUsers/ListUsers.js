import React from 'react';
import data from '../../Data/data.json';
import { ListUser } from './ListUser';
import './ListUsers.css';

const ListUsers = () => {
    return (
        <div className="users">
            {data.results.map((user, i) =>
                <ListUser
                    key={i}
                    img={user.picture.thumbnail}
                    name={user.name.first}
                    email={user.email}
                    dob={user.dob.date}
                />
            )}
        </div>
    )

}

export { ListUsers };