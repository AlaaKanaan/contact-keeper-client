import React, {useReducer} from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER, REGISTER_SUCCESS, REGISTER_FAIL, CONTACT_ERROR
} from "../types";


const ContactState = props => {
    const initialState = {
        contacts: [],
        current: null,
        loading: true,
        error: null,
        filteredContacts: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);


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
                clearFilterContact,
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;
