import React, { useState, useEffect } from "react";
import './data.css';
import appConfig from '../data/firebase';
import { getDatabase, ref, onValue } from "firebase/database";
import { useSelector, useStore } from "react-redux";
import { getData } from "../redux/display";

const Display = () => {
    const realDb = getDatabase();
    const bookRef = ref(realDb);
    let obj = {};
    const store = useStore();
    const data = useSelector(state => state.data)

    const [display, setDisplay] = useState('');


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
        <div className="data">
            <div className="information">
                <p>Take control of your Electrical System and get informations about your it</p>
            </div>
            <h3 className="title">Tcheck data here</h3>
            <div>
                <div className="datas-energy">
                    <div className="energy-data">
                        <h3>GID Energy</h3>
                        {
                            display
                                ?
                                <>
                                    <p>{display.realtime.regEnergy}W/h</p>
                                </>
                                :
                                <p>00v</p>
                        }
                    </div>
                    <div className="energy-data">
                        <h3>PV Energy</h3>
                        {
                            display
                                ?
                                <>
                                    <p>{display.realtime.pvEnergy}W/h</p>
                                </>
                                :
                                <p>00v</p>
                        }
                    </div>
                </div>
                <div className="datas-content">
                    <h3>Voltage:</h3>
                    {
                        display
                            ?
                            <>
                                <p>{display.realtime.voltage}V</p>
                            </>
                            :
                            <p>00v</p>
                    }
                </div>
                <div className="datas-content">
                    <h3>Current:</h3>
                    {
                        display
                            ?
                            <>
                                <p>{display.realtime.current}A</p>
                            </>
                            :
                            <p>00v</p>
                    }
                </div>
                <div className="datas-content">
                    <h3>Power:</h3>
                    {
                        display
                            ?
                            <>
                                <p>{display.realtime.power}W</p>
                            </>
                            :
                            <p>00v</p>
                    }
                </div>
            </div>
        </div>
    )
}
export default Display;