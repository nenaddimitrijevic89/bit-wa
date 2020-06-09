import React from 'react';
import PropTypes from 'prop-types';

import './Header.css';
// import { FaList } from 'react-icons/fa'
// import { BsGrid1X2Fill } from 'react-icons/bs';

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
                    // ? <FaList onClick={onLayoutChange} className="whiteIcons" />
                    // : <BsGrid1X2Fill onClick={onLayoutChange} className="whiteIcons" />
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


