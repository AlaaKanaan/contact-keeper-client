import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({contact}) => {

    const {id, name, email, phone, type} = contact;
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">{name}
                    <span
                        className={`badge float-right ${type === 'professional' ? 'badge-success' : 'badge-primary'}`}>
                     {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
                </h5>
            </div>
            <ul className="list-group list-group-flush">
                {email && (<li className="list-group-item">
                    <i className='fas fa-envelope-open pr-2 text-secondary'/> {email}

                </li>)}
                {phone && (<li className="list-group-item">
                    <i className='fas fa-phone pr-2 text-secondary'/> {phone}
                </li>)}
            </ul>

            <div className="card-body">
                <button className="btn btn-secondary btn-sm m-1">Edit</button>
                <button className="btn btn-danger btn-sm m-1">Delete</button>
            </div>
        </div>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
};
export default ContactItem;