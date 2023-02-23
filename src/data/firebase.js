import { initializeApp } from "firebase/app";
import { useState, useEffect, useContext, createContext } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBGkdv9v8s_gTV01-c0h38Gsr6jcERhN8E",
    authDomain: "rlac-iot.firebaseapp.com",
    databaseURL: "https://rlac-iot-default-rtdb.firebaseio.com",
    projectId: "rlac-iot",
    storageBucket: "rlac-iot.appspot.com",
    messagingSenderId: "286761135978",
    appId: "1:286761135978:web:62d3e5c381ed057724ff13",
    measurementId: "G-1RCTFDEP49"
};

export const app = initializeApp(firebaseConfig);
export const AuthContext = createContext();
export const AuthContextProvider = props => {
    const [user, setUser] = useState()
    const [error, setError] = useState()
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
      return () => unsubscribe()
    }, [])
    return <AuthContext.Provider value={{ user, error }} {...props} />
}
export const useAuthState = () => {
    const auth = useContext(AuthContext)
    return { ...auth, isAuthenticated: auth.user != null }
}