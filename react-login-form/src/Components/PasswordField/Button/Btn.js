import React from 'react';
import {Button} from 'react-materialize';
import './Btn.css';

const Btn=({name, fn})=>{
const onPress=()=>{
    fn()
}
    return(
        <Button onClick={onPress} className="button">
            {name}
        </Button>
    )
}

export {Btn};