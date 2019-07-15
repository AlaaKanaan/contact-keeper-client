import React, {useState} from 'react';

const Login = () => {


    const [user, setUser] = useState({
        email: '',
        password: ''
    });


    const {email, password} = user;


    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(user);
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
                               required
                               placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control"
                               name='password'
                               value={password}
                               onChange={onChange}
                               required
                               placeholder="Password"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;