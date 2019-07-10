import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from "../types";


const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email: 'jill@gmail.com',
                phone: '11-111-11111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Sara Watson',
                email: 'sara@gmail.com',
                phone: '22-222-2222',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Harry White',
                email: 'harry@gmail.com',
                phone: '33-333-3333',
                type: 'professional'
            }
        ],
        current: null,
        filteredContacts: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);


    //add contact

    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({type: ADD_CONTACT, payload: contact});
    };

    const deleteContact = id => {
        dispatch({type: DELETE_CONTACT, payload: id});
    };


    //delete contact


    //set current contact
    const setCurrentContact = contact => {
        dispatch({type: SET_CURRENT, payload: contact});
    };


    //clear current contact
    const clearCurrentContact = () => {
        dispatch({type: CLEAR_CURRENT, payload: {}});
    };

    //update contact
    const updateContact = contact => {
        dispatch({type: UPDATE_CONTACT, payload: contact});
    };

    //filter contacts
    const filterContact = text => {
        dispatch({type: FILTER_CONTACTS, payload: text});
    };

    //clear filter
    const clearFilterContact = () => {
        dispatch({type: CLEAR_FILTER});
    };

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filteredContacts: state.filteredContacts,
                addContact,
                deleteContact,
                setCurrentContact,
                clearCurrentContact,
                updateContact,
                filterContact,
                clearFilterContact,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;
