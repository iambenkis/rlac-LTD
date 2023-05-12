import React, { useState, useEffect } from "react";
import './data.css';
import { getDatabase, ref, onValue } from "firebase/database";

const Display = () => {
    const realDb = getDatabase();

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
                                    <p>{(display.realtime.regEnergy).toFixed(2)} kwh</p>
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
                                    <p>{(display.realtime.pvEnergy).toFixed(2)} kwh</p>
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
                                <p>{(display.realtime.voltage).toFixed(2)}V</p>
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
                                <p>{(display.realtime.current).toFixed(2)}A</p>
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
                                <p>{((display.realtime.current * display.realtime.voltage)/1000).toFixed(2)} kW</p>
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