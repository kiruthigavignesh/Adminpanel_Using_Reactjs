import React from 'react';
import "./Chart.css";
import { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = ({title,data,dataKey,grid}) => {


    




  return (
    <div className='chart'>
     <h3 className="charttitle">
        {title}
     </h3>

     <ResponsiveContainer width="100%" aspect={4 /1 }>
<LineChart data={data}>
<XAxis dataKey="name" stroke='#5550bd'/>
<Line type="monotone" dataKey={dataKey} stroke='#5550bd'/>
{/* <Line type="monotone" dataKey={dataKey} stroke='#f58442'/> */}
 <Tooltip/>  {/*it should be for showing  data in table */}
{grid && <CartesianGrid stroke="#c4c2c0" strokeDasharray="5 5"/> }  {/*it should be for using grid in table */}
<Legend/> 
</LineChart>
     </ResponsiveContainer>
    </div>
  )
}

export default Chart

