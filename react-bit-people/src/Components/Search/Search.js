import React from 'react';
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import './Search.css';
import { GenderCounter } from '../GenderCounter/GenderCounter';


class Search extends React.Component {

    counter = () => {

    }

    onSearch = (e) => {
        this.props.searchedUsers(e.target.value)
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col className="searchBar">
                        <span>
                            <i className="fa fa-search searchBar__icon"></i>
                        </span>
                        <span className="searchBar__form">
                            <Form >
                                <FormControl type="text" value={this.props.inputValue} onChange={this.onSearch} placeholder="Search users" className="mr-sm-2 searchBar__form_border" />
                            </Form>
                        </span>
                    </Col>

                </Row>
            </Container >

        )
    }
}

export { Search };