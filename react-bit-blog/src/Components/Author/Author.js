import React from 'react';

const Author = ({ name, website }) => {
    return (
        <div>
            <h3>{name}</h3>
            <h4>{website}</h4>
        </div>
    )
}

export { Author };