import React, { useEffect, useState } from 'react'
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2'
import { fetchData } from '../../services/fetch';


const BarGraph = ({data ,options}) => {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  return (
      <div >
<h2 style={{ marginLeft: '-50px', fontSize:'30px'}}>Monthly Sales Trends</h2>

<Bar options={options} data={data}/>
    </div>
  )
}


export default BarGraph