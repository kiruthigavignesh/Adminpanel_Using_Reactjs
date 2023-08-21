import React from 'react'
import './home.scss';
import Featuredinfo from '../../components/featuredINfo/Featuredinfo';
import Chart from '../../components/chart/Chart';
import { userData } from '../../dummmyChart_data';
import WidgetsSm from '../../components/widgetSm/WidgetsSm';
import WidgetsLg from '../../components/widgetLg/WidgetsLg';
import Navbar from '../../components/navbar/Navbar';
function Home() {
  return (
    <div className='home'>   
      
      <div className='homeContainer'>
      <Navbar/>
  
         <Featuredinfo/>
         <Chart data={userData} title="Sales Analytics"
         grid dataKey="Active User"  />

         <div className="homewidgets">
          <WidgetsSm/>
          <WidgetsLg/>
         </div>
      </div>
      <div>
      
      </div>
    </div>
  );
}

export default Home
