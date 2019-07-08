import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({title, icon}) => {

    return (
        <div className="navbar bg-contact-keeper text-white">
            <h4><i className={icon}/> {title}</h4>

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