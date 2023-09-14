import React from 'react'
// import Command from './command-page'
import './style.css';

// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import { useParams } from 'react-router-dom';
// import { exData } from '../datas/machine';
// import machinesData from '../datas/machine';
import { ResponsiveBar } from '@nivo/bar'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// import { FaTemperatureHigh } from 'react-icons/fa';


const Statistics = () => {

    const PvexData = [
        {
          name: "Monday",
          energy: 10,
          power: 10,
          amt: 2400
        },
        {
          name: "Tuesday",
          energy: 30,
          power: 20,
          amt: 2210
        },
        {
          name: "Wednesday",
          energy: 60,
          power: 10,
          amt: 2290
        },
        {
          name: "Thursday",
          energy: 0,
          power: 0,
          amt: 2000
        }
      ];

      const GridexData = [
        {
          name: "Monday",
          energy: 2,
          power: 10,
          amt: 2400
        },
        {
          name: "Tuesday",
          energy: 30,
          power: 20,
          amt: 2210
        },
        {
          name: "Wednesday",
          energy: 20,
          power: 10,
          amt: 2290
        },
        {
          name: "Thursday",
          energy: 5,
          power: 0,
          amt: 2000
        }
      ];
    return (
        <div className='statistic'>
            
            <div className='inspection'>
            <h2>Pv Energy Used</h2>
                <ResponsiveBar
                    data={PvexData}
                    keys={["degress"]}
                    indexBy="day"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.4}
                    valueScale={{ type: "linear" }}
                    colors="#000"
                    animate={true}
                    enableLabel={false}
                    axisTop={null}
                    axisRight={null}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "degrees",
                        legendPosition: "middle",
                        legendOffset: -40
                    }}
                />
                <LineChart
                    width={500}
                    height={300}
                    data={PvexData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="energy"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="time" stroke="#82ca9d" />
                </LineChart>
            </div>

            <div className='inspection'>
            <h2>Grid Energy Used</h2>
                <ResponsiveBar
                    data={GridexData}
                    keys={["degress"]}
                    indexBy="day"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.4}
                    valueScale={{ type: "linear" }}
                    colors="#000"
                    animate={true}
                    enableLabel={false}
                    axisTop={null}
                    axisRight={null}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: "degrees",
                        legendPosition: "middle",
                        legendOffset: -40
                    }}
                />
                <LineChart
                    width={500}
                    height={300}
                    data={GridexData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="energy"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="time" stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    )
}

export default Statistics;