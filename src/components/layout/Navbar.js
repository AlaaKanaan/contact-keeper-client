import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Navbar = ({title, icon}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-contact-keeper">
            <Link to='/' className="navbar-brand text-white"><i className={icon}/> {title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

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