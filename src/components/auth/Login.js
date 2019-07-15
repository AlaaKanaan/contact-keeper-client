import React, {useContext, useEffect, useState} from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);


    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const {setAlert} = alertContext;
    const {login, error, clearErrors, isAuthenticated} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }
        if (error) {
            setAlert(error, 'danger');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, props.history, isAuthenticated]);


    const {email, password} = user;


    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };
    const onSubmit = (e) => {
        e.preventDefault();
        login({
            email,
            password
        })
    };

    return (
        <div className="card">
            <div className="card-header">
                Account Login
            </div>
            <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control"
                               name="email"
                               value={email}
                               onChange={onChange}

                               placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control"
                               name='password'
                               value={password}
                               onChange={onChange}

                               placeholder="Password"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;