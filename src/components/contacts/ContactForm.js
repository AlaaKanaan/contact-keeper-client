import React, {useContext, useState, useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext'

const ContactForm = props => {

    const contactContext = useContext(ContactContext);
    const {addContact, current, clearCurrentContact} = contactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact(defaultValues);
        }
    }, [contactContext, current]);

    const defaultValues = {
        name: '',
        email: '',
        phone: '',
        type: 'personal',
    };

    const [contact, setContact] = useState(defaultValues);

    const {name, email, phone, type} = contact;

    const onChange = e => setContact({...contact, [e.target.name]: e.target.value});
    const onSubmit = e => {
        e.preventDefault();
        addContact(contact);
        setContact(defaultValues);
    };

    const clearAll = () => {
        clearCurrentContact();
    };

    return (
        <div className="card">
            <div className="card-header">
                {current ? 'Edit Contact' : 'Add Contact'}
            </div>
            <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input className="form-control" type="text"
                               name="name" placeholder="Name" value={name} onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="email" name="email" placeholder="Email" value={email}
                               onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="phone" placeholder="Phone" value={phone}
                               onChange={onChange}/>
                    </div>
                    <div className="form-group">
                        <h6>Contact Type</h6>
                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className={`btn btn-warning ${type === 'personal' ? 'active' : ''}`}>
                                <input type="radio" name="type" value="personal" checked={type === 'personal'}
                                       onChange={onChange}/>
                                Personal
                            </label>
                            <label className={`btn btn-warning ${type === 'professional' ? 'active' : ''}`}>
                                <input type="radio" name="type" value="professional" checked={type === 'professional'}
                                       onChange={onChange}/>
                                Professional
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit"
                                className="btn btn-primary mr-2">  {current ? 'Update Contact' : 'Add Contact'}</button>

                        {current &&
                        <button type="button"
                                className="btn btn-info" onClick={clearAll}>Clear Contact</button>
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;