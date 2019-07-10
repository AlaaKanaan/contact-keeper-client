import React, {useState} from 'react';

const ContactForm = props => {

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
    });

    const {name, email, phone, type} = contact;

    const onChange = e => setContact({...contact, [e.target.name]: e.target.value});

    return (
        <div className="card">
            <div className="card-header">
                Add Contact
            </div>
            <div className="card-body">
                <form autoComplete="name">
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
                            <label className={`btn btn-secondary ${type === 'personal' ? 'active' : ''}`}>
                                <input type="radio" name="type" value="personal" checked={type === 'personal'}
                                       onChange={onChange}/>
                                Personal
                            </label>
                            <label className={`btn btn-secondary ${type === 'professional' ? 'active' : ''}`}>
                                <input type="radio" name="type" value="professional" checked={type === 'professional'}
                                       onChange={onChange}/>
                                Professional
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Contact</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;