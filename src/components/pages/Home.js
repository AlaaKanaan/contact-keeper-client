import React, {useContext, useEffect} from 'react';
import Contacts from '../contacts/Contacts'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'
import AuthContext from "../../context/auth/authContext";

function Home(props) {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);

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