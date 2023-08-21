import React from 'react'
import './widgetsLg.css';
const WidgetsLg = () => {


  const Button=({type}) =>{
    return <button className={ " widgetLgbutton " + type }>{type}</button>;
  };
    return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgtable">
<tr className="widgetLgtr">
  <th className="widgetLgth">
    Customer
  </th>
  <th className="widgetLgth">
Date  </th>
  <th className="widgetLgth">
    Amount
  </th>
  <th className="widgetLgth">
Status  </th>
</tr>

<tr className="widgetLgtr">
  <td className="widgetLguser">
    <img src="https://funkylife.in/wp-content/uploads/2023/02/cute-girl-pic-2-1024x1024.jpg" alt="" className="widgetLgimg" />
 
 <span className="widgetLgname">Meenakshi Vigneshwaran</span>
  </td>

  <td className="widgetLgdate">2 jun 2021</td>
  <td className="widgetLgamount">$1222.00</td>

  <td className="widgetLgStatus">
    <Button type="Approved"/>
  </td>

</tr>

<tr className="widgetLgtr">
  <td className="widgetLguser">
    <img src="https://funkylife.in/wp-content/uploads/2023/02/cute-girl-pic-2-1024x1024.jpg" alt="" className="widgetLgimg" />
 
 <span className="widgetLgname">Meenakshi Vigneshwaran</span>
  </td>

  <td className="widgetLgdate">2 jun 2021</td>
  <td className="widgetLgamount">$1222.00</td>

  <td className="widgetLgStatus">
    <Button type="Pending" />
  </td>

</tr>
<tr className="widgetLgtr">
  <td className="widgetLguser">
    <img src="https://funkylife.in/wp-content/uploads/2023/02/cute-girl-pic-2-1024x1024.jpg" alt="" className="widgetLgimg" />
 
 <span className="widgetLgname">Meenakshi Vigneshwaran</span>
  </td>

  <td className="widgetLgdate">2 jun 2021</td>
  <td className="widgetLgamount">$1222.00</td>

  <td className="widgetLgStatus">
    <Button type="Declined"/>
  </td>

</tr>
<tr className="widgetLgtr">
  <td className="widgetLguser">
    <img src="https://funkylife.in/wp-content/uploads/2023/02/cute-girl-pic-2-1024x1024.jpg" alt="" className="widgetLgimg" />
 
 <span className="widgetLgname">Meenakshi Vigneshwaran</span>
  </td>

  <td className="widgetLgdate">2 jun 2021</td>
  <td className="widgetLgamount">$1222.00</td>

  <td className="widgetLgStatus">
    <Button type="Approved"/>
  </td>

</tr>
      </table>
    </div>
  )
}

export default WidgetsLg
