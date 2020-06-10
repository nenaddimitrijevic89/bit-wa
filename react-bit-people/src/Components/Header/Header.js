import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Container, Col, Row } from 'react-bootstrap';


const Header = ({ isList, onLayoutChange, updateUsers }) => {
    return (
        <Container fluid className="header">
            <Container>
                <Row>
                    <Col lg={{ span: 2, offset: 5 }} md={{ span: 6, offset: 3 }} sm={{ span: 4, offset: 3 }}>
                        <h2 className="header__title">Bit People</h2>
                    </Col>
                    <Col lg={{ span: 2, offset: 3 }} md={{ span: 1, offset: 2 }} sm={{ span: 1, offset: 4 }}>
                        <i className="fa fa-refresh header__icons" onClick={updateUsers}></i>
                        {isList
                            ? <i className="fa fa-th-large header__icons" onClick={onLayoutChange}></i>
                            : <i className="fa fa-list header__icons" onClick={onLayoutChange}></i>
                        }
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

Header.propTypes = {
    isList: PropTypes.bool,
    onLayoutChange: PropTypes.func.isRequired
};
Header.defaultProps = {
    isList: true
};

export { Header };