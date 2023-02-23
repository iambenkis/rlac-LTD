// import React, { useRef } from 'react'; 
// import { Link } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth'

// const Login = () => {
//     const emailRef = useRef();
//     const passwordRef = useRef();
//     const handleLogin = (e) => {
//         e.preventDefault();
//         console.log(emailRef.current.value, passwordRef.current.value, e)
//         // e.target.reset()
//     }
//     return (
//         <div className="login">
//             <div> 
//                 <h2>Sign up</h2>
//                 <form onSubmit={handleLogin}>
//                     <label for="username">Username:</label><br />
//                     <input ref={emailRef} type="text" id="username" name="username" /><br />
//                     <label for="pwd">Password:</label><br />
//                     <input ref={passwordRef} type="password" id="pwd" name="pwd" /><br />
//                     <input type="submit" value="Submit" className='button'/>
//                 </form>
//                 {/* <Link to='/signUp' >sign up</Link> */}
//             </div>
//         </div>
//     );
// }

// export default Login;