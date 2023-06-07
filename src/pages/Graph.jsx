import Navbar from "../components/Navbar";
// import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function Graph() {
   

    const data = [
        {
            name: 'Today',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Yesterday',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'This Week',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Last Week',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'This Month',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        
    ];





    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2">
                    <Navbar />
                </div>
                <div className="col-lg-9 graphArea ">
                    <h4 className=" webname mb-4">Graph Link</h4>
                    <ResponsiveContainer width="100%" height="70%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>

                </div>

            </div>
            <div className="col-lg-1 "></div>
        </div>
    )
}
export default Graph;