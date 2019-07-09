import React from 'react';
import Contacts from '../contacts/Contacts'

function Home(props) {
    return (
        <div className="row">
            <div className="col">{/* ContactForm */}</div>
            <div className="col">
                <Contacts/>
            </div>
        </div>
    );
}

export default Home;