import React, {useContext, useRef, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = props => {

    const contactContext = useContext(ContactContext);
    const {filterContact, clearFilterContact, filteredContacts} = contactContext;
    const text = useRef('');

    useEffect(() => {
        if (filteredContacts === null) {
            text.current.value = '';
        }
    });
    const onChange = e => {
        if (text.current.value !== '') {
            filterContact(e.target.value);
        } else {
            clearFilterContact();
        }
    };
    return (
        <form>
            <div className="form-group">
                <input ref={text} type='text' className="form-control" placeholder="Filter Contacts..."
                       onChange={onChange}/>
            </div>
        </form>
    )
};
export default ContactFilter;