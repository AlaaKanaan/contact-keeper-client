import React, {useState} from 'react';

const Register = () => {


    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    });


    const {name, email, password, password2} = user;


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
                Account Registration
            </div>
            <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" name="name"
                               value={name}
                               onChange={onChange}
                               placeholder="Enter name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control"
                               name="email"
                               value={email}
                               onChange={onChange}
                               placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                            anyone
                            else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password"
                               name='password'
                               value={password}
                               onChange={onChange}
                               placeholder="Password"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password2" className="form-control" name="password"
                               name='password2'
                               value={password2}
                               onChange={onChange}
                               placeholder="Password"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;