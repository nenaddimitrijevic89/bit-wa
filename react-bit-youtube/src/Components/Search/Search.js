import React from 'react';
import 'materialize-css';
import { Col, FormControl } from 'react-bootstrap';
import './Search.css';


const Search = ({ searchVideos }) => {

    const onSearch = (event) => {
        if (event.keyCode !== 13) return;

        searchVideos(event.target.value)
    }

    return (
        <Col className="search" lg={12}>
            <FormControl onKeyUp={onSearch} type="text" placeholder="Search" className="mr-sm-2 searchBar__form_border" />
        </Col>
    )

}

export { Search };