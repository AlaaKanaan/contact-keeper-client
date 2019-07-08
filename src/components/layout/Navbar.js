import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Navbar = ({title, icon}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-contact-keeper">
            <Link to='/' className="navbar-brand text-white"><i className={icon}/> {title}</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );

};

export default Navbar;

Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
};

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt'
};