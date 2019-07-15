import React, {Fragment, useContext} from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import AuthContext from '../../context/auth/authContext';


const Navbar = ({title, icon}) => {

    const authContext = useContext(AuthContext);
    const {isAuthenticated, logout, user} = authContext;


    const authLinks = (
        <Fragment>
            <li className="nav-item ">
                <a href='#!' className="nav-link">
                    <span className="pr-2">
                        Hello {user && user.name}
                    </span>
                    <i className='fas fa-sign-out-alt'/>
                    <span className="hide-sm">Logout
                    </span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li className="nav-item">
                <Link to='/about' className="nav-link">About</Link>
            </li>
            <li className="nav-item">
                <Link to='/register' className="nav-link">Register</Link>
            </li>
            <li className="nav-item">
                <Link to='/login' className="nav-link">Login</Link>
            </li>
        </Fragment>
    );


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-contact-keeper">
            <Link to='/' className="navbar-brand text-white"><i className={icon}/> {title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
                <ul className="navbar-nav ml-auto text-center">
                    {isAuthenticated ? authLinks : guestLinks}
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