import React, {Fragment, useContext} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem';
import './assets/contacts.css';

const Contacts = props => {

    const contactContext = useContext(ContactContext);

    const {contacts, filteredContacts} = contactContext;

    if (contacts.length === 0) {
        return (
            <div className="alert alert-info">Contact list is empty...Please add a contact</div>
        )
    }

    const contactsList = filteredContacts ? filteredContacts : contacts;

    return (
        <Fragment>
            <TransitionGroup>
                {contactsList.map(contact => (
                    <CSSTransition key={contact.id} timeout={300} classNames="item">
                        <ContactItem key={contact.id} contact={contact}/>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </Fragment>
    );
};

export default Contacts;