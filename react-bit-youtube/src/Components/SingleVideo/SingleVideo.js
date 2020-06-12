import React from 'react';
import { Col } from 'react-bootstrap';


const SingleVideo = ({ id }) => {
    return (
        <Col lg={8}>
            <iframe className="singlevideo" width="560" height="315" src={`https://www.youtube.com/embed/${id}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Col>
    )
}
export { SingleVideo }