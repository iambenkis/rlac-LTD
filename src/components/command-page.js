import React, { useState, useEffect} from "react";
import  appConfig  from '../data/firebase';
import { getDatabase, set, ref } from "firebase/database";

const Command = () => {
    const realDb = getDatabase(); 
    let obj = {};
    const pvStatus = "ON"

    const handleOnpv = (e) => {
        e.preventDefault();
        set(
            ref(realDb, 'data/remote', 'pv'), 
            {
                pv : 99,
                reg : 0
            }
        )
    }

    return (
        <>       
            <h1>Command here</h1>
            <button onClick={ handleOnpv }>Update Pv status</button>
        </>
    )
}
export default Command;