import React, { useState, useEffect} from "react";
import  appConfig  from '../data/firebase';
import { getDatabase, ref,  onValue  } from "firebase/database";
import { useSelector, useStore  } from "react-redux";
import { getData } from "../redux/display"; 

const Display = () => {
    const realDb = getDatabase();
    const bookRef = ref(realDb);
    let obj = {}; 
    const store = useStore();
    const data = useSelector(state => state.data)

    useEffect(() => { 
        getData(bookRef, store)
        console.log(data, "myData")
    },[data])
    
    
    return (
        <>
            <h1>Data here</h1>
            <ul> 
              <li>data</li>
            </ul>
        </>
    )
}
export default Display;