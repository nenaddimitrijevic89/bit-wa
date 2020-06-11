import React from 'react';
import { Col, FormControl } from 'react-bootstrap';


class Search extends React.Component {

    onSearch = (event) => {
        if (event.keyCode === 13) {
            console.log(event.target.value)
            this.props.searchedGiphy(event)
        }
    }
    render() {
        return (
            <Col lg={12}>
                <FormControl onKeyUp={this.onSearch} type="text" placeholder="Search giphy" className="mr-sm-2 searchBar__form_border" />
            </Col>
        )
    }
}

export { Search };