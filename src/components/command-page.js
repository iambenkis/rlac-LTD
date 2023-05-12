import React, { useState, useEffect } from "react";  
import { getDatabase, ref, set, onValue } from "firebase/database"; 

const Command = () => {
    const realDb = getDatabase();  
    const [display, setDisplay] = useState(''); 

    const handleOnpv = (e) => {
        e.preventDefault();
        set(
            ref(realDb, 'data/remote', 'pv'),
            {
                pvSt: "on",
                regSt: "off"
            }
        )
    }

    const handleOnreg = (e) => {
        e.preventDefault();
        set(
            ref(realDb, 'data/remote', 'reg'),
            {
                pvSt: "off",
                regSt: "on"
            }
        )
    }

    useEffect(() => {
        onValue(ref(realDb), snapshot => {
            const data = snapshot.val();
            if (data !== null) {
                setDisplay(Object.values(data)[0])
            }
        })
    }, [])

    console.log(display, 'display')

    return (
        <div className="command">
            <h3 className="title">Command</h3>
            <p>You can change sources there!</p>
            <div className="block-command">
                <div className="block-cont">
                    <h3>GIG</h3>
                    <div>
                        {
                            display
                                ?
                                <>
                                    <p>{display.remote.regSt}</p>
                                </>
                                :
                                <p>...</p>
                        }
                        <button onClick={handleOnreg} className={display?.remote?.regSt}>Switch GID</button>
                    </div>
                </div>
                <div className="block-cont">
                    <h3>PV</h3>
                    <div>
                        {
                            display
                                ?
                                <>
                                    <p>{display?.remote?.pvSt}</p>
                                </>
                                :
                                <p>...</p>
                        }
                        <button onClick={handleOnpv} className={display?.remote?.pvSt}>Switch PV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Command;