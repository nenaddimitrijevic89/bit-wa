import React from 'react';
import { Button } from 'react-materialize';

const Btn = ({ cb, name }) => {
    const inner = () => {
        cb()
    }
    return (
        <Button onClick={inner}>{name}</Button>
    )
}

export { Btn }