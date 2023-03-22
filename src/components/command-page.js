import React, { useState, useEffect } from "react";
import appConfig from '../data/firebase';
import { useSelector, useStore } from "react-redux";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { getData } from "../redux/display";

const Command = () => {
    const realDb = getDatabase();
    const bookRef = ref(realDb);
    let obj = {};
    const store = useStore();
    const data = useSelector(state => state.data)

    const [display, setDisplay] = useState('');

    const pvStatus = "ON"

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
                        <button onClick={handleOnreg}>Switch GID</button>
                    </div>
                </div>
                <div className="block-cont">
                    <h3>PV</h3>
                    <div>
                        {
                            display
                                ?
                                <>
                                    <p>{display.remote.pvSt}</p>
                                </>
                                :
                                <p>...</p>
                        }
                        <button onClick={handleOnpv}>Switch PV</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Command;