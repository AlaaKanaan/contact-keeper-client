import React, {useReducer} from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_CONTACTS,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER, CONTACT_ERROR
} from "../types";


const ContactState = props => {
    const initialState = {
        contacts: null,
        current: null,
        loading: true,
        error: null,
        filteredContacts: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //get contacts
    const getContacts = async () => {
        try {
            const res = await axios.get('/api/contacts');
            dispatch({
                type: GET_CONTACTS,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.msg
            });
        }
    };
    //add contact

    const addContact = async contact => {
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/contacts', contact, config);
            dispatch({
                type: ADD_CONTACT,
                payload: res.data
            });

        } catch (err) {
            dispatch({
                type: CONTACT_ERROR,
                payload: err.response.msg
            });
        }
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

    //clear current contact
    const clearContacts = () => {
        dispatch({type: CLEAR_CONTACTS, payload: {}});
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
                error: state.error,
                loading: state.loading,
                addContact,
                deleteContact,
                setCurrentContact,
                clearCurrentContact,
                updateContact,
                filterContact,
                clearContacts,
                getContacts,
                clearFilterContact,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;
