import React, { useContext, useRef } from 'react'; 
import { Link } from 'react-router-dom';
import  appConfig  from '../data/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth' 
import { AuthContext } from '../data/firebase';

import {
    useLocation,
    useNavigate,
    useParams,
  } from "react-router-dom";
  
  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }

const Signup = ({history}) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const auth = getAuth();
    const handleSignup = (e) => {
        e.preventDefault(); 
        createUserWithEmailAndPassword( auth, emailRef.current.value, passwordRef.current.value )
        .then((cred) => {
            console.log(cred.user)
            e.target.reset();
        })
        .catch((err) => {
            console.log(err.message)
            e.target.reset();
        }) 
    }

    // const { currentUser } = useContext(AuthContext);

 console.log("User : ", useContext(AuthContext))
    
    return (
        <div className="signup">
            <div> 
                <h2>Sign up</h2>
                <form onSubmit={handleSignup}>
                    <label for="username">Username:</label><br />
                    <input ref={emailRef} type="text" id="username" name="username" /><br />
                    <label for="pwd">Password:</label><br />
                    <input ref={passwordRef} type="password" id="pwd" name="pwd" /><br />
                    <button type="submit">Submit</button>
                </form>
                {/* <Link to='/signUp' >sign up</Link> */}
            </div>
        </div>
    );
}

export default withRouter(Signup);