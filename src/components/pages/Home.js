import React from 'react';
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'

function Home(props) {
    return (
        <div className="row mt-4">
            <div className="col">
                <ContactForm/>
            </div>
            <div className="col">
                <Contacts/>
            </div>
        </div>
    );
}

export default Home;