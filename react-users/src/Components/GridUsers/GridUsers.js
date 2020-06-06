import React from 'react';
import data from '../../Data/data.json';
import {GridUser} from './GridUser';
import './GridUsers.css';

const GridUsers=()=>{
    return(
        <div className="gridUsers">
            {data.results.map((user, i)=>
                <GridUser
                key={i}
                img={user.picture.large}
                name={user.name.first}
                email={user.email}
                dob={user.dob.date}
                />
            )}
        </div>
    )
}

export {GridUsers};