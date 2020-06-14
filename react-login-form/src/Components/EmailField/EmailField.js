import React from 'react';
import {Form} from 'react-bootstrap';


const EmailField=({setEmail, value})=>{

const emailText=(event)=>{
const text=event.target.value;
    setEmail(text)
}

    return(
        <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={value} type="email" placeholder="Enter email" onChange={emailText}/>
  </Form.Group>
    )
}

export{EmailField}