// import logo from './logo.svg';
import './App.css'; 
import Signup from './authentification/signup';
import Home from './components/home';
import Login from './authentification/login';
import {BrowserRouter ,Route,Routes} from "react-router-dom";
// import ProtectedRoute from './protected/protectedRoutes' 
import  Protected from './protected/protectedRoutes'
import Header from './components/header';
import Display from './components/data-display';

function App() {
  
  return (
    <div className="App"> 
        <BrowserRouter> 
          {/* <Protected>
            <Header />
          </Protected> */}
          <Header /> 
          <Routes> 
            <Route path="/" element={
              <Protected>
                <Home/> 
              </Protected>
            }/>
            <Route path="/data" element={
              <Protected>
                 <Display />
              </Protected>
            }/>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </BrowserRouter> 
    </div>
  );
}

export default App;
