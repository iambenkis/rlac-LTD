import React, { useState, useEffect} from "react";
import  appConfig  from '../data/firebase';
import { getDatabase, ref,  onValue  } from "firebase/database";

const Display = () => {
    const realDb = getDatabase();
    const bookRef = ref(realDb);
    let obj = {};

    useEffect(() => {
        onValue(bookRef, snapshot => {
            obj = snapshot.val(); 
            console.log(obj);
        })
    },[])

    return (
        <h1>Data here</h1>
    )
}
export default Display;