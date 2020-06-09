import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';


const Header = ({ isList, onLayoutChange }) => {
    return (
        <nav className="nav">
            <div>
                <h2 className="nav__title">Bit People</h2>
            </div>
            
            <i className="fa fa-refresh"></i>
            
            <div id="listOrGrid">
                {isList
                ?<i className="fa fa-list" onClick={onLayoutChange}></i>
                :<i className="fa fa-th-large" onClick={onLayoutChange}></i>
                }
            </div>
        </nav>
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


