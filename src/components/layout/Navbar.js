import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({title, icon}) => {

    return (
        <div className="navbar bg-secondary text-white">
            <h1><i className={icon}/> {title}</h1>

        </div>
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