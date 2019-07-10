import React from 'react';
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'

function Home(props) {
    return (
        <div className="row mt-4">
            <div className="col">
                <ContactForm/>
            </div>
            <div className="col">
                <ContactFilter/>
                <Contacts/>
            </div>
        </div>
    );
}

export default Home;