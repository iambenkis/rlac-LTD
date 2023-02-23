import logo from './logo.svg';
import './App.css';
import Display from './components/data-display';
import Command from './components/command-page';
import Signup from './authentification/signup';
import Home from './components/home';
import {BrowserRouter ,Route,Routes} from "react-router-dom";
import ProtectedRoute from './protected/protectedRoutes'
import { AuthProvider } from './protected/Auth';
import PrivateRoute from './protected/protectedRoutes';

function App() {
  
  return (
    // <div className="App">
    //     {/* <Display />
    //     <Command /> */}
    //     <Signup />
    // </div>
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes> 
            <Route path="/" element={<Home/>} /> 
            <Route path="/signup" element={<Signup/>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
