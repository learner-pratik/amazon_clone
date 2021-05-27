import React, { useState } from 'react'
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
    
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault(); // this stops the refresh
        // logic for login
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            // logged in, redirect to homepage
            history.push('/');
        }).catch((e) => {
            alert(e.message)
        });
    }

    const register = (e) => {
        e.preventDefault(); // this stops the refresh
        // login for register
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // created account, logged in, redirect to homepage
            history.push('/');
        }).catch((e) => {
            alert(e.message)
        });
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon Logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={login} className="login__signInButton" type="submit">
                        Sign in
                    </button>
                </form>
                <p>
                    By signing-in, you agree to Amazon's condition of Use and Sale.
                    Please see our Privacy notice, our cookies notice and our 
                    Interest-based Ads notice
                </p>
                <button onClick={register} className="login__registerButton">
                    Create your Amazon account
                </button>
            </div>
        </div>  
    )
}

export default Login
