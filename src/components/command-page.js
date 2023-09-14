import React, { useState, useEffect } from "react";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import './data.css';

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // console.log(display, 'display')
    let RegVoltage = 0;
    let PvVoltage = 0;

    display?.remote?.regSt === 'on' ? RegVoltage = 218 : RegVoltage = 0;
    display?.remote?.pvSt === 'on' ? PvVoltage = 218 : PvVoltage = 0;


    return (
        <div className="command">
            <h3 className="title">Commands</h3>
            <div className="block-command">
                <div className="block-cont">
                    <div className='circular'>
                        <CircularProgressbar
                            value={RegVoltage/2.3}
                            circleRatio={0.75}
                            text={`${ display
                                ?
                                (display.realtime.voltage).toFixed(1)+ "V"
                                :
                                "00"
                            }`}
                            styles={buildStyles({
                            rotation: 1 / 2 + 1 / 8,
                            textColor: "#000",
                            pathColor: "darkorange",
                            })}
                        />
                        <h3>Grid</h3>
                    </div>
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
                        <button onClick={handleOnreg} className={display?.remote?.regSt}>Switch Grid</button>
                    </div>
                </div>
                <div className="block-cont">
                    
                    <div className='circular'>
                        <CircularProgressbar
                            value={PvVoltage/2.3}
                            circleRatio={0.75}
                            text={`${ display
                                ?
                                (display.realtime.voltage).toFixed(1)+ "V"
                                :
                                "00"
                            }`}
                            styles={buildStyles({
                            rotation: 1 / 2 + 1 / 8,
                            textColor: "#000",
                            pathColor: "darkorange",
                            })}
                        />
                        <h3>PV</h3>
                    </div>
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