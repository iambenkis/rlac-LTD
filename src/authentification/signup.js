import React, { useRef } from 'react'; 
import { Link } from 'react-router-dom';
// import  appConfig  from '../data/firebase';
import { getAuth } from 'firebase/auth' 
// import { AuthContext } from '../data/firebase';
// import { useFirebase } from "react-redux-firebase"; 
import { useSelector, useStore } from 'react-redux';
import { fetchSignupAuth } from '../redux/signup';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './style.css';

const Signup = () => { 
    const emailRef = useRef();
    const passwordRef = useRef();
    const auth = getAuth();
    const navigate = useNavigate(); 
    const store = useStore();
    const state = useSelector(state => state.signup)

    const handleSignup = (e) => {
        e.preventDefault(); 
        fetchSignupAuth(auth, emailRef.current.value,passwordRef.current.value, store)
        e.target.reset();
    }  
    if (state.status) {
        navigate('/login');
        localStorage.removeItem("signed")
    }  

    return (
        <div className="signup">
            <div> 
                <h2>Sign up</h2>
                <form onSubmit={handleSignup}>
                    <input ref={emailRef} type="text" placeholder='Username' id="username" name="username" required/><br />
                    <input ref={passwordRef} type="password" placeholder='password' id="pwd" name="pwd" required/><br />
                    <button type="submit">Submit</button>
                </form>
                <p>Already have an account ? <Link to='/login' >Log in</Link></p>
            </div>
        </div>
    );
}

export default Signup;