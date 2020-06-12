import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';

const Related = ({ filterVideos, id }) => {
    return (

        <Card style={{ width: '12rem' }} onClick={() => filterVideos(id)}>
            <iframe className="singlevideo" width="300" height="200" src={`https://www.youtube.com/embed/${id}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Card>

    )
}

export { Related };
