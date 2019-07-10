import React, {Fragment, useContext} from 'react';
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem';

const Contacts = props => {

    const contactContext = useContext(ContactContext);

    const {contacts, filteredContacts} = contactContext;

    if (contacts.length === 0) {
        return (
            <div className="alert alert-info">Contact list is empty...Please add a contact</div>
        )
    }

    let contactsList = filteredContacts ? filteredContacts : contacts;

    return (
        <Fragment>
            {contactsList.map(contact => (<ContactItem key={contact.id} contact={contact}/>))}
        </Fragment>
    );
};

export default Contacts;