import React, { Component } from 'react';
import './Header.css';

// const Header = () => {
//     return (
//         <nav>
//             <h3>My React Blog</h3>
//         </nav >
//     )
// }

class Header extends Component {
    render() {
        return (
            <nav className="nav">
                <h3 className="nav__title">My React Blog</h3>
            </nav >
        )
    }
}


export { Header };