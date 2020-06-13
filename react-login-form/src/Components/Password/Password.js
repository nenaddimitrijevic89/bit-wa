import React from 'react';

const Password = ({ getPassword, value }) => {
    const onTyping = (event) => {
        getPassword(event.target.value)
    }
    return (
        <div>
            <input value={value} type="password" onChange={onTyping}></input>
        </div>
    )
}

export { Password }