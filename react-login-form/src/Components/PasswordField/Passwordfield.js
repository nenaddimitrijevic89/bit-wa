import React from 'react';
import {Form} from 'react-bootstrap';

const PasswordField=({setPassword, value})=>{
const passwordText=(event)=>{
    const text=event.target.value;
    setPassword(text)
}

    return (
        <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control value={value} type="password" placeholder="Password" onChange={passwordText}/>
  </Form.Group>
    )
}

export {PasswordField};