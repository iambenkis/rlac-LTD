import { getAuth } from 'firebase/auth';
import React, { useEffect, useRef, useState } from 'react'; 
import { useSelector, useStore } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchLoginAuth } from '../redux/login';
import './style.css';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const auth = getAuth();
    const navigate = useNavigate();
    const store = useStore(); 
    const state = useSelector(state => state.login)

    const handleLogin = (e) => {
        e.preventDefault();
        fetchLoginAuth(auth, emailRef.current.value, passwordRef.current.value, store) 
        e.target.reset()
    }

    useEffect(() => { 
      if (localStorage.getItem("token")) {
        navigate('/');
      }
    },[state]); 

    return (
        <div className="login">
            <div> 
                <h2>Login In</h2>
                <form onSubmit={handleLogin}>
                    <label for="username">Username:</label><br />
                    <input ref={emailRef} type="text" id="username" name="username" /><br />
                    <label for="pwd">Password:</label><br />
                    <input ref={passwordRef} type="password" id="pwd" name="pwd" /><br />
                    <input type="submit" value="Submit" className='button'/>
                </form> 
                <p>Don't have an account ? <Link to='/signUp' >sign up</Link></p>
            </div>
        </div>
    );
}

export default Login;