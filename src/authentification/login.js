import { getAuth } from 'firebase/auth';
import React, { useEffect, useRef } from 'react'; 
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
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state]); 

    return (
        <div className="login">
            <div> 
                <h2>Login In</h2>
                <form onSubmit={handleLogin}> 
                    <input ref={emailRef} type="text" id="username" name="username" placeholder='Your Email'/><br />
                    <input ref={passwordRef} type="password" id="pwd" name="pwd" placeholder='Your password'/><br />
                    <button type="submit">Submit</button>
                </form> 
                <p>Don't have an account ? <Link to='/signUp' >sign up</Link></p>
            </div>
        </div>
    );
}

export default Login;