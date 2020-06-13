import React from 'react';
import { TextInput } from 'react-materialize';

const Input = ({ getInput, value }) => {
    const onTyping = (event) => {
        getInput(event.target.value)
    }
    return (
        <form >
            <input value={value} type="text" onChange={onTyping}></input>
        </form>
        // <TextInput
        // onChange={onTyping}
        // value={value}
        // ></TextInput>
    )
}

export { Input };